import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET single event
export async function GET(request, { params }) {
  try {
    const event = await prisma.event.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        reservations: {
          orderBy: { createdAt: 'desc' },
        },
        _count: { select: { reservations: true } },
      },
    });

    if (!event) {
      return NextResponse.json({ error: 'Événement non trouvé' }, { status: 404 });
    }

    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// PUT update event
export async function PUT(request, { params }) {
  try {
    const body = await request.json();
    const { title, description, location, date, capacity, imageUrl, isActive, quote, topics, partners, tags } = body;

    const event = await prisma.event.update({
      where: { id: parseInt(params.id) },
      data: {
        ...(title && { title }),
        ...(description && { description }),
        ...(location && { location }),
        ...(date && { date: new Date(date) }),
        ...(capacity !== undefined && { capacity: parseInt(capacity) }),
        ...(imageUrl !== undefined && { imageUrl }),
        ...(isActive !== undefined && { isActive }),
        ...(quote !== undefined && { quote: quote || null }),
        ...(topics !== undefined && { topics: topics || null }),
        ...(partners !== undefined && { partners: partners || null }),
        ...(tags !== undefined && { tags: tags || null }),
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// DELETE event
export async function DELETE(request, { params }) {
  try {
    await prisma.event.delete({
      where: { id: parseInt(params.id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
