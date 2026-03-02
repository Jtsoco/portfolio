import React from 'react';
import { Badge, Card, Row, Col } from 'react-bootstrap';
import { getApiItems, type ApiItem } from '../../assets/carouselItemInfo/currentProjectInfo';

interface ApiOveriewProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
}


export function ApiSubSection(props: ApiOveriewProps) {
  const apiItems: ApiItem[] = getApiItems();

  function methodColor(m: string) {
    switch (m) {
    case 'GET': return 'success';
    case 'POST': return 'primary';
    case 'PUT': return 'warning';
    case 'DELETE': return 'danger';
    default: return 'secondary';
  }
  }
  return (
    <Row xs={1} md={2} lg={3} className="g-4 api-overview" ref={props.targetRef}>
      {
        apiItems.map((item, index) => (
          <Col key={index}>
            <Card className="api-card">
                <Card.Body>
                      <Badge bg={methodColor(item.method)} className="me-2">
                        {item.method}
                      </Badge>
                      <code>{item.path}</code>
                      <Card.Text className="mt-2">{item.description}</Card.Text>
                    </Card.Body>
            </Card>
          </Col>
        ))
      }
      </Row>
  )
}
