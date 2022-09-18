import React from 'react';
import '../css/App.css';
import Intro from './Intro';
import Navbar from './Navbar';

import { ReactComponent as Logo } from '../images/logo.svg';

export default function App() {
  return (
    <div className="container">
      <header>
        <div className="header">
          <Logo />
          <Navbar />
        </div>
      </header>
      <main>
        <Intro />
      </main>
    </div>
  );
}




