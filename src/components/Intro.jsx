import React from 'react';

// =============================== Intro Section ===============================
import MobileIntroImg  from '../images/image-hero-mobile.png';
import DesktopIntroImg  from '../images/image-hero-desktop.png';

import { ReactComponent as ClientAudiophile } from '../images/client-audiophile.svg';
import { ReactComponent as ClientDatabiz } from '../images/client-databiz.svg';
import { ReactComponent as ClientMaker } from '../images/client-maker.svg';
import { ReactComponent as ClientMeet } from '../images/client-meet.svg';
// =============================== Intro Section ===============================

export default function Intro() {
    return (
      <section id="intro-section">
        <div className="bg-pic">
          <picture>
            <source media="(min-width: 830px)"  srcSet={DesktopIntroImg} />
            <img src={MobileIntroImg} alt="Intro, a guy holding laptop" />
          </picture>
        </div>
        <div className="segment">
          <div className='contents'>
            <h1>Make remote work</h1>
            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button id="learnMore" className="btn">Learn More</button>
          </div>
          <div className='client'>
            <ClientAudiophile />
            <ClientDatabiz />
            <ClientMaker />
            <ClientMeet />
          </div>
        </div>
      </section>
    )
  }