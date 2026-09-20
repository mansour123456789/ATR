const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create default admin
  const hashedPassword = await bcrypt.hash('admin123', 12);
  
  const admin = await prisma.admin.upsert({
    where: { email: 'admin@atr.org.tn' },
    update: {},
    create: {
      email: 'admin@atr.org.tn',
      password: hashedPassword,
      name: 'Administrateur ATR',
    },
  });
  console.log('✅ Admin created:', admin.email);

  // Create sample events
  const event1 = await prisma.event.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Séminaire PIARC Tunis 2026',
      description: 'Séminaire international sur la sécurité routière organisé en collaboration avec la PIARC. Cet événement rassemblera des experts mondiaux pour discuter des dernières avancées en matière de conception et gestion des routes.',
      location: 'Centre de Conférences, Tunis',
      date: new Date('2026-03-15T09:00:00'),
      capacity: 200,
      imageUrl: '/assets/images/resource/service-1.jpg',
      isActive: true,
    },
  });

  const event2 = await prisma.event.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Journée Technique sur les Ouvrages d\'Art',
      description: 'Formation intensive sur la conception et la maintenance des ouvrages d\'art en Tunisie. Présentations techniques et visites de terrain incluses.',
      location: 'École Nationale d\'Ingénieurs de Tunis (ENIT)',
      date: new Date('2026-05-20T08:30:00'),
      capacity: 80,
      imageUrl: '/assets/images/resource/service-2.jpg',
      isActive: true,
    },
  });

  console.log('✅ Events created:', event1.title, ',', event2.title);
  console.log('\n📋 Admin credentials:');
  console.log('   Email: admin@atr.org.tn');
  console.log('   Password: admin123');
  console.log('\n⚠️  Please change the password after first login!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
