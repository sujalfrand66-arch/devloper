import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';
import Cursor from '@/components/Cursor';
import Loader from '@/components/Loader';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Work from '@/components/sections/Work';
import Stats from '@/components/sections/Stats';
import Studio from '@/components/sections/Studio';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <SmoothScroll>
      <Loader />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <Stats />
        <Studio />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
