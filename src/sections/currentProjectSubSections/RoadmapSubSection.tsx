import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import { getRoadmapItems } from '../../assets/carouselItemInfo/currentProjectInfo';

export interface RoadmapSubSectionProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
}

export function RoadmapSubSection(props: RoadmapSubSectionProps) {
  const roadmapItems = getRoadmapItems();
  const statusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success';
      case 'in-progress': return 'warning';
      case 'planned': return 'secondary';
      default: return 'secondary';
    }
  }
  return (
    <div ref={props.targetRef} className="section-page section-column roadmap-section">
      <h3 className= "roadmap-header">Roadmap</h3>
      <ListGroup className="roadmap-list">
        {roadmapItems.map((item, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center roadmap-item" as="li">
            <span className="roadmap-text">{item.label}</span>
            <Badge bg={statusColor(item.status)} >
              {item.status}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>


  )
}
