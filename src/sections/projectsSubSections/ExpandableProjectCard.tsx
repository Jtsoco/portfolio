import { useState } from 'react';
import { Card, Badge } from 'react-bootstrap';
import type { ProjectCard } from '../../assets/projectsInfo';
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
    <Card className='expandable-project-card mb-3 cursor-pointer position-relative' onClick={() => setIsExpanded(!isExpanded)}>
      {/* Status Badge - Top Right */}
      <Badge
        bg={statusColors[project.status]}
        className='position-absolute top-0 end-0 m-3'
      >
        {project.status}
      </Badge>

      <Card.Body>
        {/* Header Section - Centered */}
        <div className='mb-2 text-center'>
          <Card.Title className='mb-2'>{project.title}</Card.Title>
          <Card.Subtitle className='text-muted'>
            {project.shortDescription}
          </Card.Subtitle>
        </div>

        {/* Tech Stack Icons - Centered */}
        <div className='mb-3'>
          <div className='tech-stack-icons-small justify-content-center'>
            {project.techStack.map((tech, index) => (
              <img
                key={index}
                src={`general-tech-stack/${tech}`}
                alt={tech.replace(/icons8-|\.png|\.svg|-96|-100/g, '')}
                className='tech-icon-small'
                title={tech.replace(/icons8-|\.png|\.svg|-96|-100/g, '').replace(/-/g, ' ')}
              />
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div className='mb-3'>
          <a
            href={project.githubLink}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-sm btn-outline-primary'
            onClick={(e) => e.stopPropagation()}
          >
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
                <ul className='features-list'>
                  {project.features.map((feature, index) => (
                    <li key={index} className='text-muted'>
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
                <div className='project-roadmap-list'>
                  {project.roadmap.map((item, index) => (
                    <div key={index} className='project-roadmap-item'>
                      <span className='roadmap-text'>{item.label}</span>
                      <Badge
                        bg={
                          item.status === 'completed'
                            ? 'success'
                            : item.status === 'in-progress'
                              ? 'warning'
                              : 'secondary'
                        }
                      >
                        {item.status}
                      </Badge>
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
                      onClick={(e) => e.stopPropagation()}
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
                      onClick={(e) => e.stopPropagation()}
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
