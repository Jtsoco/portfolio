import '../stylesheet.css';
interface introProps {
  targetRef: React.RefObject<null | HTMLElement>;
  gameTargetRef: React.RefObject<null | HTMLElement>;
  currentProjectTargetRef: React.RefObject<null | HTMLElement>;
  projectsTargetRef: React.RefObject<null | HTMLElement>;
  introductionRef: React.RefObject<null | HTMLDivElement>;
};

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
export function IntroductionSection(props: introProps) {

  const scrollToSection = (ref: React.RefObject<null | HTMLElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });

    }
  }
  return (
    <div className="section-page" ref={props.introductionRef}>
      <div>

        <h1> Hi, I'm <span className="blue">Jackson</span>.</h1>
        <h2> I'm a Programmer and a Teacher </h2>
        <div className="button-container">

        <Button onClick={() => scrollToSection(props.targetRef)}variant="primary" >About Me and Projects</Button>
        <Button onClick={() => scrollToSection(props.gameTargetRef)} >Play My Game</Button>
        <Button onClick={() => scrollToSection(props.currentProjectTargetRef)} >Current Project</Button>
        <Button onClick={() => scrollToSection(props.projectsTargetRef)} >Projects</Button>
        <a target="_blank" href="https://github.com/Jtsoco/">
          <Button >
            <Image src={'general-tech-stack/icons8-github-50.png'} alt="GitHub Repository" className="github-icon"/>
              Github
          </Button>
        </a>
        </div>
      </div>
    </div>
  )
}
