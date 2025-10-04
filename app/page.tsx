'use client';

import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import Description from '@/components/description';
import HeroStats from '@/components/HeroStats/HeroStats';
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';
import ParticleBackground from '@/components/ParticleBackground/ParticleBackground';

export default function Home() {
  return (
    <div className="App scroll-container">
      <ParticleBackground />
      <Header />
      <Description />
      <HeroStats />
      <RegistrationForm />
      <Footer />
    </div>
  );
}
