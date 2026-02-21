import '../stylesheet.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { pyxelGameInfo } from '../assets/carouselItemInfo/pyxelGameCarousel';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { GameControlsComponent } from '../contexts/gameControlsComponent';

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
      <div className="flex-row space-between center-items full-width mb-16">
      <ButtonGroup>

      <Button variant="secondary"  target="_blank" >Load Game</Button>
      <Button onClick={toggleGameLoad} variant="primary" >Unload</Button>
      </ButtonGroup>
      </div>
       <div className="game-container secondary-bg">

      <iframe src="public/games/dungeon_explorer.html"  className="game" title="Dungeon Explorer Game">

      </iframe>
      <div className="game-caption">
        <h3>Dungeon Explorer</h3>
        <div className="game-controls">
          <GameControlsComponent action='Menu' method="Tab">
            </GameControlsComponent>
          <GameControlsComponent action='Select' method="Enter/Return">
            </GameControlsComponent>

          <GameControlsComponent action='Move' method="⬆️⬇️⬅️➡️">
            </GameControlsComponent>
          <GameControlsComponent action='Attack' method="D Key">
            </GameControlsComponent>
          <GameControlsComponent action='Shield' method="S Key">
            </GameControlsComponent>
          <GameControlsComponent action='Jump' method="Spacebar">
            </GameControlsComponent>

        </div>
      </div>
      </div>
    </div>
  )
} else {
  return (
    <div className='section-page section-column section-bg'>
      <div className="flex-row space-between center-items full-width mb-16">
      <ButtonGroup>

      <Button onClick={toggleGameLoad} variant="primary" >Load Game</Button><Button variant="secondary"  target="_blank"  >Unload</Button>
      </ButtonGroup>
      </div>

      <div className="game-container secondary-bg">

      <Carousel data-bs-theme = 'dark'>
        { pyxelGameInfo().map((item, index) => (
          <Carousel.Item key={index}>
            <Image className="carousel-image" src={item.src} alt={item.alt} />
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
    </div>
  )
}
}
