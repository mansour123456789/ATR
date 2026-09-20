import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET single team member
export async function GET(request, { params }) {
  try {
    const member = await prisma.teamMember.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!member) {
      return NextResponse.json({ error: 'Membre non trouvé' }, { status: 404 });
    }

    return NextResponse.json(member);
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// PUT update team member
export async function PUT(request, { params }) {
  try {
    const body = await request.json();
    const { name, role, bio, imageUrl, linkedin, email, order, isActive } = body;

    const member = await prisma.teamMember.update({
      where: { id: parseInt(params.id) },
      data: {
        ...(name && { name }),
        ...(role && { role }),
        ...(bio !== undefined && { bio: bio || null }),
        ...(imageUrl !== undefined && { imageUrl: imageUrl || null }),
        ...(linkedin !== undefined && { linkedin: linkedin || null }),
        ...(email !== undefined && { email: email || null }),
        ...(order !== undefined && { order: parseInt(order) || 0 }),
        ...(isActive !== undefined && { isActive }),
      },
    });

    return NextResponse.json(member);
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// DELETE team member
export async function DELETE(request, { params }) {
  try {
    await prisma.teamMember.delete({
      where: { id: parseInt(params.id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
