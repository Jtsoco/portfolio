import { useState } from 'react';
import { Card, Badge, Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from '../../assets/projectsInfo';
import '../../stylesheet.css';

interface ExpandableProjectCardProps {
  project: ProjectCard;
}

export function ExpandableProjectCard({ project }: ExpandableProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusColors: Record<string, string> = {
    completed: 'success',
    'in-progress': 'primary',
    archived: 'secondary',
  };

  return (
    <Card className='project-card expandable-project-card mb-3' onClick={() => setIsExpanded(!isExpanded)}>
      <Card.Body className='cursor-pointer'>
        {/* Header Section */}
        <div className='d-flex justify-content-between align-items-start mb-2'>
          <div className='flex-grow-1'>
            <Card.Title className='mb-2'>{project.title}</Card.Title>
            <Card.Subtitle className='text-muted mb-3'>
              {project.shortDescription}
            </Card.Subtitle>
          </div>
          <Badge bg={statusColors[project.status]} className='ms-2'>
            {project.status}
          </Badge>
        </div>

        {/* Tech Stack */}
        <div className='mb-3'>
          <div className='tech-stack-badges'>
            {project.techStack.map((tech, index) => (
              <Badge key={index} bg='light' text='dark' className='me-2 mb-2'>
                {tech.replace(/icons8-|\.png|\.svg|-96|-100/g, '').replace(/-/g, ' ')}
              </Badge>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div className='mb-3'>
          <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='btn btn-sm btn-outline-primary'>
            View on GitHub
          </a>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className='expanded-content mt-3 pt-3 border-top'>
            {/* Full Description */}
            <div className='mb-3'>
              <h6 className='fw-bold'>About</h6>
              <p className='text-muted'>{project.description}</p>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div className='mb-3'>
                <h6 className='fw-bold'>Features</h6>
                <ul className='mb-0'>
                  {project.features.map((feature, index) => (
                    <li key={index} className='text-muted small'>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Roadmap */}
            {project.roadmap && project.roadmap.length > 0 && (
              <div className='mb-3'>
                <h6 className='fw-bold'>Roadmap</h6>
                <div className='roadmap-list'>
                  {project.roadmap.map((item, index) => (
                    <div key={index} className='roadmap-item small mb-2'>
                      <Badge
                        bg={
                          item.status === 'completed'
                            ? 'success'
                            : item.status === 'in-progress'
                              ? 'primary'
                              : 'light'
                        }
                        text={item.status === 'planned' ? 'dark' : ''}
                        className='me-2'
                      >
                        {item.status}
                      </Badge>
                      <span className='text-muted'>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Future URLs if available */}
            {(project.backendUrl || project.frontendUrl) && (
              <div className='mt-3 pt-3 border-top'>
                <h6 className='fw-bold mb-2'>Links</h6>
                {project.backendUrl && (
                  <div className='mb-2'>
                    <a
                      href={project.backendUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn btn-sm btn-outline-info'
                    >
                      Backend
                    </a>
                  </div>
                )}
                {project.frontendUrl && (
                  <div>
                    <a
                      href={project.frontendUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn btn-sm btn-outline-success'
                    >
                      Frontend
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Expand Indicator */}
        <div className='mt-2 text-center text-muted'>
          <small>{isExpanded ? '▲ Click to collapse' : '▼ Click to expand'}</small>
        </div>
      </Card.Body>
    </Card>
  );
}
