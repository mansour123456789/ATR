FROM node:18-alpine

WORKDIR /app

# Définir l'environnement de production
ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Installation des dépendances (y compris prisma pour le build)
COPY package.json package-lock.json* ./
RUN npm install

# Copie du reste des fichiers
COPY . .

# Générer le client Prisma et construire Next.js pour la production
RUN npx prisma generate
RUN npm run build

# Exposition du port
EXPOSE 3000

# Initialiser/migrer la DB et lancer en mode production
CMD sh -c "npx prisma db push --accept-data-loss && node prisma/seed.js; npm run start"
