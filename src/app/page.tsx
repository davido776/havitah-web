import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CommunityStages from '@/components/CommunityStages';
import Discover from '@/components/Discover';
import EventJourney from '@/components/EventJourney';
import Movements from '@/components/Movements';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0E031C]">
      <Navbar />
      <Hero />
      <Features />
      <CommunityStages />
      <Discover />
      <EventJourney />
      <Movements />
      <Download />
      <Footer />
    </main>
  );
}
