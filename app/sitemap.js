export default async function sitemap() {
  const baseUrl = 'https://atr-tunisie.org';
  const lastModified = new Date();

  const routes = [
    { url: `${baseUrl}`, lastModified, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/about-us`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/events`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/events/seminaire-piarc-2026`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/domaines`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/publications`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/publications/glissements-de-terrain-resilience-infrastructures`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/publications/securite-routiere-hss-chantiers`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/publications/ministre-equipement-accueille-bureau-atr`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/team`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/calendrier`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/formation`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/actualites`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/communiques`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/plan-du-site`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/mentions-legales`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/politique-confidentialite`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
  ];

  return routes;
}
