import Head from "next/head";
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Amenities from '@/components/Amenities'
import Gallery from '@/components/Gallery'
import Tourism from '@/components/Tourism'
import Leisure from '@/components/Leisure'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('@/components/Map'), {
  ssr: false
});

export default function Home() {
  return (
    // Force re-build 2025-11-14
    <div>
      <Head>
        <title>Gîte La Petite Forêt - Chambres d'hôtes près des Sables d&apos;Olonne, Vendée</title>
        <meta name="description" content="Découvrez La Petite Forêt, un gîte de charme avec piscine et sauna à Grosbreuil, à 15min des Sables d'Olonne. Idéal pour vos vacances en Vendée." />
        <meta name="keywords" content="gîte, chambres d'hôtes, les sables d'olonne, vendée, gîte de charme, piscine, sauna, vendée globe, puy du fou, location vacances" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.la-petite-foret.fr/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.la-petite-foret.fr/" />
        <meta property="og:title" content="Gîte La Petite Forêt - Chambres d'hôtes près des Sables d'Olonne" />
        <meta property="og:description" content="Un havre de paix avec piscine et sauna, idéalement situé pour découvrir la Vendée, le Vendée Globe et le Puy du Fou." />
        <meta property="og:image" content="https://www.la-petite-foret.fr/cover-la-petiteforet.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.la-petite-foret.fr/" />
        <meta property="twitter:title" content="Gîte La Petite Forêt - Chambres d'hôtes près des Sables d'Olonne" />
        <meta property="twitter:description" content="Un havre de paix avec piscine et sauna, idéalement situé pour découvrir la Vendée, le Vendée Globe et le Puy du Fou." />
        <meta property="twitter:image" content="https://www.la-petite-foret.fr/cover-la-petiteforet.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `
            {
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Gîte La Petite Forêt",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "La Petite Forêt",
                "addressLocality": "Grosbreuil",
                "postalCode": "85440",
                "addressCountry": "FR"
              },
              "telephone": "+33251378787",
              "description": "Gîte de charme avec 2 chambres d'hôtes, piscine couverte et sauna, situé en campagne sur une propriété close de 1 hectare, à 15 minutes des Sables d'Olonne.",
              "image": "https://www.la-petite-foret.fr/cover-la-petiteforet.png",
              "url": "https://www.la-petite-foret.fr/",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "4"
              }
            }
          `}}
        />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <Amenities />
        <Gallery />
        <section id="map" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-16">
              Où nous trouver
            </h2>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <MapWithNoSSR />
            </div>
          </div>
        </section>
        <Tourism />
        <Leisure />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
