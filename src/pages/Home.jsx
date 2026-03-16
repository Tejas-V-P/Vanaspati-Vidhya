import React from 'react';
import Hero from '../components/layout/Hero.jsx';
import Stats from '../components/layout/Stats.jsx';
import IKSSection from '../components/layout/IKSSection.jsx';
import Benefits from '../components/layout/Benefits.jsx';
import Doshas from '../components/layout/Doshas.jsx';
import PlantTicker from '../components/layout/PlantTicker.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <IKSSection />
      <Benefits />
      <Doshas />
      <PlantTicker />
    </>
  );
}
