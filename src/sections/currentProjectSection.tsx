interface currentProjectProps {
  targetRef: React.RefObject<null>;
  subSectionRefs: Record<string, React.RefObject<HTMLDivElement | null>>;
}
import '../stylesheet.css';
// import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { currentProjectInfo } from '../assets/carouselItemInfo/currentProjectInfo';
import Button from 'react-bootstrap/Button';
import { ProjIntroSubSection } from './currentProjectSubSections/ProjIntroSubSection';
import { ImageSubSection } from './currentProjectSubSections/ImageSubSection';

export function CurrentProjectSection(props: currentProjectProps) {
  const projectInfo = currentProjectInfo();
  return (
    <div className='section-page section-column' ref={props.targetRef}>

      <div className='backend-info'>
        <ProjIntroSubSection name={projectInfo.name} description={projectInfo.description} techstack={projectInfo.techstack} architecture={projectInfo.architecture} flow={projectInfo.flow}/>
        <div className='project-image-sections'>
          {
            projectInfo.imageSections.map((imageSection, index) => (
              <div ref={props.subSectionRefs[imageSection.id]} key={index}>
                <ImageSubSection key={index} className={imageSection.className} src={imageSection.src} alt={imageSection.alt} title={imageSection.title} id={imageSection.id} />
              </div>
            ))
          }
        </div>


      </div>

    </div>
  )
}
