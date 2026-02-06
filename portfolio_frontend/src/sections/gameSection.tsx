import '../stylesheet.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

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
    <div className='section-page'>
      <button onClick={toggleGameLoad}>Unload Game</button>
      <iframe src="games/dungeon_explorer.html" width="600" height="600" title="Dungeon Explorer Game">

      </iframe>
    </div>
  )
} else {
  return (
    <div className='section-page'>
      <button onClick={toggleGameLoad}>Load Game</button>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="games/dungeon_explorer_1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Dungeon Explorer - Screenshot 1</h3>
            <p>Explore the dungeon and find treasures!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="games/pyxel-boss.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Dungeon Explorer - Screenshot 2</h3>
            <p>Avoid traps and defeat monsters!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
}
