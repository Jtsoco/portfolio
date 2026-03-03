import { Button, Image } from 'react-bootstrap';
import type { ProjectInfoInterface } from '../../assets/carouselItemInfo/currentProjectInfo';

export function ProjIntroSubSection(props: ProjectInfoInterface){
  const projectInfo = {
    name: props.name,
    description: props.description,
    techstack: props.techstack,
    architecture: props.architecture,
    flow: props.flow
  }
  return (
            <div className ="section-header current-project-header">
          <h2 className="section-title">Current Project</h2>
          <h3 className="current-project-name">Rag Book Recommendation App
            <a target="_blank" href="https://github.com/Jtsoco/rag-book-app">
              <div>
                <Button className="github-button" >
                <Image src={'current_project/techstack/icons8-github-50.png'} alt="GitHub Repository" className="github-icon"/>
                  Github
                  </Button>
              </div>
            </a>
          </h3>
          <div className="current-project-description">
            <p>{projectInfo.description}</p>
          </div>

        <div className='project-techstack-images'>
          {
            projectInfo.techstack.map((image: string, index: number) => (
              <Image key={index} src={"current_project/techstack/" + image} alt={`Tech stack image ${index}`} className="tech-stack-icon" />
            ))
          }
        </div>
        </div>
  )
}
