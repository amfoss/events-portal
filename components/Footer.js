'use client';

import React from 'react';
import Image from 'next/image';
import './footer.css';

function Footer() {
  return (
    <footer className="footer section">
      <div className="footercontents">
        <h3>Support Open Source With</h3>
        <div className="foss-logo">
          {/* <img src={`${process.env.PUBLIC_URL}/assets/amfoss_logo.png`} alt="amfoss logo" className="logo" /> */}
          <Image src="/assets/amfoss_logo.png" alt="amfoss logo" className="logo" width={100} height={100} />
        </div>
        <p>We&apos;ll see you there!</p>
        <div className="foot-icon">
          <a target='_blank' href="https://hacktoberfest.com" rel="noreferrer"><Image src="/assets/HF-Icon-Color-Light.png" alt="hacktober logo" width={20} height={20} /></a>
          <a target='_blank' href="https://github.com/amfoss" rel="noreferrer"><Image src="/assets/github.png" alt="github logo" width={20} height={20} /></a>
          <a target='_blank' href="https://digitalocean.com" rel="noreferrer"><Image src="/assets/digitalocean-icon.svg" alt="digital ocean" width={20} height={20} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
