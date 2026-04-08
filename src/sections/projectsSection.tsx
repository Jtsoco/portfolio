import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheet.css';
import { getProjects } from '../assets/projectsInfo';
import { ExpandableProjectCard } from './projectsSubSections/ExpandableProjectCard';

interface ProjectsSectionProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
}

export function ProjectsSection(props: ProjectsSectionProps) {
  const projects = getProjects();

  return (
    <div className='section-page section-column' ref={props.targetRef}>
      <Container className='py-5'>
        {/* Section Title */}
        <Row className='mb-5'>
          <Col>
            <h1 className='display-5 fw-bold mb-3'>Projects</h1>
            <p className='lead text-muted'>
              A collection of completed projects and works in progress
            </p>
          </Col>
        </Row>

        {/* Projects List */}
        <Row>
          <Col lg={8} className='mx-auto'>
            {projects.length > 0 ? (
              projects.map((project) => (
                <ExpandableProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className='text-center text-muted py-5'>
                <p>No projects added yet. Check back soon!</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
