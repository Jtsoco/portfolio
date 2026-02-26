import '../stylesheet.css';
interface introProps {
  targetRef: React.RefObject<null | HTMLElement>;
  gameTargetRef: React.RefObject<null | HTMLElement>;
  currentProjectTargetRef: React.RefObject<null | HTMLElement>;
};

import Button from 'react-bootstrap/Button';
export function IntroductionSection(props: introProps) {

  const scrollToSection = (ref: React.RefObject<null | HTMLElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="section-page">
      <div>

        <h1> Hi, I'm <span className="blue">Jackson</span>.</h1>
        <h2> I'm a programmer and Teacher </h2>
        <div className="button-container">

        <Button onClick={() => scrollToSection(props.targetRef)}variant="primary" >About Me and Projects</Button>
        <Button onClick={() => scrollToSection(props.gameTargetRef)} >Play My Game</Button>
        <Button onClick={() => scrollToSection(props.currentProjectTargetRef)} >Current Project</Button>
        {/* <Button href="https://github.com/Jtsoco">Github</Button> */}

        </div>
      </div>
    </div>
  )
}
