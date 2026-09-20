import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET all team members
export async function GET() {
  try {
    const members = await prisma.teamMember.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'asc' }],
    });
    return NextResponse.json(members);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// POST create team member
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, role, bio, imageUrl, linkedin, email, order, isActive } = body;

    if (!name || !role) {
      return NextResponse.json({ error: 'Nom et rôle sont obligatoires' }, { status: 400 });
    }

    const member = await prisma.teamMember.create({
      data: {
        name,
        role,
        bio: bio || null,
        imageUrl: imageUrl || null,
        linkedin: linkedin || null,
        email: email || null,
        order: parseInt(order) || 0,
        isActive: isActive !== undefined ? isActive : true,
      },
    });

    return NextResponse.json(member, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
