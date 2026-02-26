interface currentProjectProps {
  targetRef: React.RefObject<null>;
}
import '../stylesheet.css';
// import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { currentProjectInfo } from '../assets/carouselItemInfo/currentProjectInfo';


export function CurrentProjectSection(props: currentProjectProps) {
  const projectInfo = currentProjectInfo();
  return (
    <div className='section-page section-column' ref={props.targetRef}>

      <div className='backend-info'>
        <div className ="section-header">
          <h2 className="section-title">Current Project</h2>
          <h3>Rag Book Recommendation App</h3>

        <div className='project-techstack-images'>
          {
            projectInfo.techstack.map((image: string, index: number) => (
              <Image key={index} src={"/portfolio/src/assets/techstack/" + image} alt={`Tech stack image ${index}`} className="tech-stack-icon" />
            ))
          }
        </div>
        </div>

        <div className='architecture'>
          <h3>Architecture Diagram</h3>
          <Image src={projectInfo.architecture} alt="Architecture Diagram" className="current-project-image" />
        </div>

        <div className='project-flow'>
        <h3>Chatbot Flow Diagram</h3>
          <Image src={projectInfo.flow} alt="Project Flow Diagram" className="current-project-image" />
        </div>

      </div>

    </div>
  )
}
