import '../stylesheet.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { pyxelGameInfo } from '../assets/carouselItemInfo/pyxelGameCarousel';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

export function GameSection() {

  // create a button to load and unload game, when loaded show iframe
  // when loaded swap for unload
  // when unloaded show the carousel of game images plus explanation text
  // when loaded show explanations of controls to the side of the iframe
  // don't let the game be loaded on small mobile screens
  const [isGameLoaded, setIsGameLoaded] = useState(false);

  const toggleGameLoad = () => {
    setIsGameLoaded(!isGameLoaded);
  }



  if (isGameLoaded) {
  return (
    <div className='section-page section-column'>
      <button onClick={toggleGameLoad}>Unload Game</button>
      <iframe src="games/dungeon_explorer.html" width="600" height="600" title="Dungeon Explorer Game">

      </iframe>
    </div>
  )
} else {
  return (
    <div className='section-page section-column'>
      <button onClick={toggleGameLoad}>Load Game</button>
      <Carousel>
        { pyxelGameInfo().map((item, index) => (
          <Carousel.Item key={index}>
            <Image className="carousel-image border border-primary border-2" src={item.src} alt={item.alt} />
            <Carousel.Caption className="carousel-caption">
              <div className="carousel-inner-caption">

              <h3>{item.captionTitle}</h3>
              <p>{item.captionText}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        )) }
      </Carousel>
    </div>
  )
}
}
