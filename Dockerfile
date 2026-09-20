FROM node:18-alpine

WORKDIR /app

# Installation des dépendances
COPY package.json package-lock.json* ./
RUN npm install

# Copie du reste des fichiers
COPY . .

# Générer le client Prisma
RUN npx prisma generate

# Exposition du port
EXPOSE 3000

# Initialiser la DB et lancer le serveur
CMD sh -c "npx prisma db push --accept-data-loss && node prisma/seed.js; npm run dev"
