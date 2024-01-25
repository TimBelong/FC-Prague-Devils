// App.js
import React from 'react';
import AppHeader from '../header/AppHeader';
import BannerSlider from '../slider/BannerSlider';

const App = () => {
  const banners = [
    { id: 1, image: 'images/slider/slider1.jpg', alt: 'Banner 1', title: 'Lorenco: "WE ARE ON THE RIGHT PATH"', text: "Lorenco's words to Milan TV: 'Focusing on Bologna, moving in the right direction on our path'" },
    { id: 2, image: 'images/slider/slider2.jpg', alt: 'Banner 2', title: 'TIME MACHINE: PAZZINI IN AC MILAN V BOLOGNA', text: 'Giampaolo runs riot again against the Rossoblù and decides the match at the San Siro' },
    { id: 3, image: 'images/slider/slider3.jpg', alt: 'Banner 3', title: 'TACTICAL SESSION AT MILANELLO', text: "Rossoneri preparations continue ahead of Saturday's clash with Bologna" },
  ];

  

  return (
    <div className="App">
      <AppHeader />
      <BannerSlider banners={banners} />
    </div>
  );
}

export default App;
