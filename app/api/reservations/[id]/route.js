import { prisma } from '@/lib/prisma';
import { sendReservationConfirmation } from '@/lib/email';
import { NextResponse } from 'next/server';

// GET single reservation
export async function GET(request, { params }) {
  try {
    const reservation = await prisma.reservation.findUnique({
      where: { id: parseInt(params.id) },
      include: { event: true },
    });

    if (!reservation) {
      return NextResponse.json({ error: 'Réservation non trouvée' }, { status: 404 });
    }

    return NextResponse.json(reservation);
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// PUT update reservation status (admin only - confirm/cancel)
export async function PUT(request, { params }) {
  try {
    const { status } = await request.json();
    const validStatuses = ['PENDING', 'CONFIRMED', 'CANCELLED'];

    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: 'Statut invalide' }, { status: 400 });
    }

    const reservation = await prisma.reservation.update({
      where: { id: parseInt(params.id) },
      data: { status },
      include: { event: true },
    });

    // Send confirmation email if status changed to CONFIRMED
    if (status === 'CONFIRMED') {
      await sendReservationConfirmation({
        to: reservation.email,
        name: reservation.name,
        eventTitle: reservation.event.title,
        eventDate: reservation.event.date,
        eventLocation: reservation.event.location,
      });
    }

    return NextResponse.json({ success: true, reservation });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// DELETE reservation
export async function DELETE(request, { params }) {
  try {
    await prisma.reservation.delete({
      where: { id: parseInt(params.id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
