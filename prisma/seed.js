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
    update: {
      title: "Concevoir et gérer les routes selon l'approche du système sûr",
      description: 'Séminaire international organisé par l’ATR et PIARC sous le thème : « La sécurité routière, la conception géométrique et l\'approche système sûr ». Rassemblant plus de 300 experts mondiaux.',
      location: 'Tunis, Tunisie',
      date: new Date('2026-12-09T09:00:00'),
      capacity: 350,
      imageUrl: '/event9desember.jpg',
      isActive: true,
      quote: 'La sécurité routière, la conception géométrique et l\'approche système sûr.',
      topics: 'Sécurité routière, Conception géométrique, Approche système sûr, Audit de sécurité',
      partners: 'ATR & PIARC (Association Mondiale de la Route)',
      tags: '#PIARC #ATR2026 #SécuritéRoutière #SystèmeSûr #ConceptionGéométrique',
    },
    create: {
      title: "Concevoir et gérer les routes selon l'approche du système sûr",
      description: 'Séminaire international organisé par l’ATR et PIARC sous le thème : « La sécurité routière, la conception géométrique et l\'approche système sûr ». Rassemblant plus de 300 experts mondiaux.',
      location: 'Tunis, Tunisie',
      date: new Date('2026-12-09T09:00:00'),
      capacity: 350,
      imageUrl: '/event9desember.jpg',
      isActive: true,
      quote: 'La sécurité routière, la conception géométrique et l\'approche système sûr.',
      topics: 'Sécurité routière, Conception géométrique, Approche système sûr, Audit de sécurité',
      partners: 'ATR & PIARC (Association Mondiale de la Route)',
      tags: '#PIARC #ATR2026 #SécuritéRoutière #SystèmeSûr #ConceptionGéométrique',
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

  const event3 = await prisma.event.upsert({
    where: { id: 3 },
    update: {
      title: 'Les enjeux HSS et sécurité routière sur nos chantiers',
      description: 'Vous travaillez sur chantier ? Cet après-midi est faite pour vous ! Nous vous donnons rendez-vous pour une après-midi riche en échanges, en partage d\'expériences et en solutions concrètes pour bâtir des chantiers plus sûrs.',
      location: 'Cité des Sciences à Tunis',
      date: new Date('2026-04-30T13:30:00'),
      capacity: 150,
      imageUrl: '/event30avr.jpg',
      isActive: true,
      quote: 'Securing Sites. Protecting Lives. Paving the Future.',
      topics: 'Risques chantiers, Retours d’expérience, Engagements collectifs',
      partners: 'ATR & Ministère de l\'Équipement',
      tags: '#HSS #SécuritéRoutière #Chantiers',
    },
    create: {
      id: 3,
      title: 'Les enjeux HSS et sécurité routière sur nos chantiers',
      description: 'Vous travaillez sur chantier ? Cet après-midi est faite pour vous ! Nous vous donnons rendez-vous pour une après-midi riche en échanges, en partage d\'expériences et en solutions concrètes pour bâtir des chantiers plus sûrs.',
      location: 'Cité des Sciences à Tunis',
      date: new Date('2026-04-30T13:30:00'),
      capacity: 150,
      imageUrl: '/event30avr.jpg',
      isActive: true,
      quote: 'Securing Sites. Protecting Lives. Paving the Future.',
      topics: 'Risques chantiers, Retours d’expérience, Engagements collectifs',
      partners: 'ATR & Ministère de l\'Équipement',
      tags: '#HSS #SécuritéRoutière #Chantiers',
    },
  });

  const event4 = await prisma.event.upsert({
    where: { id: 4 },
    update: {
      title: 'Glissements de Terrain : Gestion des Risques et Stabilité des Ouvrages',
      description: 'Journée Technique exceptionnelle co-organisée par l\'ATR et l\'ATMS en partenariat avec le Ministère de l’Équipement et de l’Habitat face aux défis climatiques et géotechniques.',
      location: 'Hôtel El Mouradi Gammarth, Tunis',
      date: new Date('2026-06-03T08:30:00'),
      capacity: 200,
      imageUrl: '/event3juin.jpg',
      isActive: true,
      quote: 'Ensemble pour des infrastructures plus sûres et résilientes face aux risques naturels.',
      topics: 'Risques géotechniques, Stabilisation des versants, Monitoring, Solutions innovantes',
      partners: 'ATR, ATMS & Ministère de l\'Équipement et de l\'Habitat',
      tags: '#GlissementsDeTerrain #ATMS #Géotechnique #Résilience #ATR2026',
    },
    create: {
      id: 4,
      title: 'Glissements de Terrain : Gestion des Risques et Stabilité des Ouvrages',
      description: 'Journée Technique exceptionnelle co-organisée par l\'ATR et l\'ATMS en partenariat avec le Ministère de l’Équipement et de l’Habitat face aux défis climatiques et géotechniques.',
      location: 'Hôtel El Mouradi Gammarth, Tunis',
      date: new Date('2026-06-03T08:30:00'),
      capacity: 200,
      imageUrl: '/event3juin.jpg',
      isActive: true,
      quote: 'Ensemble pour des infrastructures plus sûres et résilientes face aux risques naturels.',
      topics: 'Risques géotechniques, Stabilisation des versants, Monitoring, Solutions innovantes',
      partners: 'ATR, ATMS & Ministère de l\'Équipement et de l\'Habitat',
      tags: '#GlissementsDeTerrain #ATMS #Géotechnique #Résilience #ATR2026',
    },
  });

  const event5 = await prisma.event.upsert({
    where: { id: 5 },
    update: {
      title: 'ASSEMBLÉE GÉNÉRALE – ASSOCIATION TUNISIENNE DES ROUTES (ATR)',
      description: 'L’Association Tunisienne des Routes (ATR) a le plaisir de vous convier à son Assemblée Générale. Votre présence est importante pour la vie de l’ATR et pour continuer à développer ensemble nos actions au service du secteur routier en Tunisie.',
      location: 'Startup Village, Tunis',
      date: new Date('2026-10-24T09:00:00'),
      capacity: 120,
      imageUrl: '/1000007112.png',
      isActive: true,
      quote: 'Construire ensemble l’avenir de l’infrastructure routière tunisienne.',
      topics: 'Rapport moral, Rapport financier, Activités ATR, Perspectives, Projets à venir',
      partners: 'ATR (Association Tunisienne des Routes)',
      tags: '#ATR #AssembléeGénérale #Tunis #Routes',
    },
    create: {
      id: 5,
      title: 'ASSEMBLÉE GÉNÉRALE – ASSOCIATION TUNISIENNE DES ROUTES (ATR)',
      description: 'L’Association Tunisienne des Routes (ATR) a le plaisir de vous convier à son Assemblée Générale. Votre présence est importante pour la vie de l’ATR et pour continuer à développer ensemble nos actions au service du secteur routier en Tunisie.',
      location: 'Startup Village, Tunis',
      date: new Date('2026-10-24T09:00:00'),
      capacity: 120,
      imageUrl: '/1000007112.png',
      isActive: true,
      quote: 'Construire ensemble l’avenir de l’infrastructure routière tunisienne.',
      topics: 'Rapport moral, Rapport financier, Activités ATR, Perspectives, Projets à venir',
      partners: 'ATR (Association Tunisienne des Routes)',
      tags: '#ATR #AssembléeGénérale #Tunis #Routes',
    },
  });

  console.log('✅ Events created:', event1.title, ',', event2.title, ',', event3.title, ',', event4.title, ',', event5.title);
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
