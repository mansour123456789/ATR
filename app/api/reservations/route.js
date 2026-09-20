import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET all reservations
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const eventId = searchParams.get('eventId');
    const status = searchParams.get('status');

    const reservations = await prisma.reservation.findMany({
      where: {
        ...(eventId && { eventId: parseInt(eventId) }),
        ...(status && { status }),
      },
      include: {
        event: { select: { title: true, date: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(reservations);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// POST create reservation (public)
export async function POST(request) {
  try {
    const body = await request.json();
    const { eventId, name, email, phone, message } = body;

    if (!eventId || !name || !email) {
      return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 400 });
    }

    // Check event exists and has capacity
    const event = await prisma.event.findUnique({
      where: { id: parseInt(eventId) },
      include: { _count: { select: { reservations: true } } },
    });

    if (!event || !event.isActive) {
      return NextResponse.json({ error: 'Événement non disponible' }, { status: 404 });
    }

    const confirmedCount = await prisma.reservation.count({
      where: { eventId: parseInt(eventId), status: 'CONFIRMED' },
    });

    if (confirmedCount >= event.capacity) {
      return NextResponse.json({ error: 'Cet événement est complet' }, { status: 409 });
    }

    // Check for duplicate email reservation
    const existing = await prisma.reservation.findFirst({
      where: { eventId: parseInt(eventId), email, status: { not: 'CANCELLED' } },
    });

    if (existing) {
      return NextResponse.json({ error: 'Vous êtes déjà inscrit à cet événement' }, { status: 409 });
    }

    const reservation = await prisma.reservation.create({
      data: {
        eventId: parseInt(eventId),
        name,
        email,
        phone: phone || null,
        message: message || null,
        status: 'PENDING',
      },
      include: { event: true },
    });

    return NextResponse.json({
      success: true,
      message: 'Votre demande de réservation a été soumise. Vous recevrez un email de confirmation une fois approuvée par l\'administrateur.',
      reservation,
    }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
