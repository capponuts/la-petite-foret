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
    <div>
      <Head>
        <title>Gîte La Petite Forêt - Les Sables d&apos;Olonne</title>
        <meta name="description" content="Gîte de charme La Petite Forêt, proche des Sables d'Olonne. Calme, nature et confort." />
        <link rel="icon" href="/favicon.ico" />
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
