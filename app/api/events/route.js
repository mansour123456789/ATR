import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET all events
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const activeOnly = searchParams.get('active') === 'true';

    const events = await prisma.event.findMany({
      where: activeOnly ? { isActive: true } : {},
      include: {
        _count: { select: { reservations: true } },
      },
      orderBy: { date: 'asc' },
    });

    return NextResponse.json(events);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// POST create event (admin only)
export async function POST(request) {
  try {
    const body = await request.json();
    const { title, description, location, date, capacity, imageUrl, quote, topics, partners, tags } = body;

    if (!title || !description || !location || !date) {
      return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 400 });
    }

    const event = await prisma.event.create({
      data: {
        title,
        description,
        location,
        date: new Date(date),
        capacity: parseInt(capacity) || 100,
        imageUrl: imageUrl || null,
        quote: quote || null,
        topics: topics || null,
        partners: partners || null,
        tags: tags || null,
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
