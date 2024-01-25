// App.js
import React from 'react';
import AppHeader from '../header/AppHeader';
import BannerSlider from '../slider/BannerSlider';

const App = () => {
  const banners = [
    { id: 1, image: 'slider1.jpg', alt: 'Ьфшт', title: 'Title 1', text: 'Text 1' },
    { id: 2, image: 'slider2.jpg', alt: 'Banner 2', title: 'Title 2', text: 'Text 2' },
    { id: 3, image: 'slider3.jpg', alt: 'Banner 3', title: 'Title 3', text: 'Text 3' },
  ];

  return (
    <div className="App">
      <AppHeader />
      <BannerSlider banners={banners} />
    </div>
  );
}

export default App;
