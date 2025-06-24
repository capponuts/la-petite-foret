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

export default function Home() {
  return (
    // Force re-build
    <div>
      <Head>
        <title>Gîte La Petite Forêt - Chambres d'hôtes près des Sables d&apos;Olonne, Vendée</title>
        <meta name="description" content="Découvrez La Petite Forêt, un gîte de charme avec piscine et sauna à Grosbreuil, à 15min des Sables d'Olonne. Idéal pour vos vacances en Vendée." />
        <meta name="keywords" content="gîte, chambres d'hôtes, les sables d'olonne, vendée, gîte de charme, piscine, sauna, vendée globe, puy du fou, location vacances" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://la-petite-foret.vercel.app/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://la-petite-foret.vercel.app/" />
        <meta property="og:title" content="Gîte La Petite Forêt - Chambres d'hôtes près des Sables d'Olonne" />
        <meta property="og:description" content="Un havre de paix avec piscine et sauna, idéalement situé pour découvrir la Vendée, le Vendée Globe et le Puy du Fou." />
        <meta property="og:image" content="https://la-petite-foret.vercel.app/cover-la-petiteforet.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://la-petite-foret.vercel.app/" />
        <meta property="twitter:title" content="Gîte La Petite Forêt - Chambres d'hôtes près des Sables d'Olonne" />
        <meta property="twitter:description" content="Un havre de paix avec piscine et sauna, idéalement situé pour découvrir la Vendée, le Vendée Globe et le Puy du Fou." />
        <meta property="twitter:image" content="https://la-petite-foret.vercel.app/cover-la-petiteforet.png" />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <Amenities />
        <Gallery />
        <Tourism />
        <Leisure />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
