import { useState, useEffect, useRef } from 'react';
import { Offcanvas, Nav, Button } from 'react-bootstrap';

export interface NavigationItem {
  label: string;
  href: string;
  onClick: () => void; // optional onClick handler
  targetRef: React.RefObject<HTMLDivElement>; // reference to the section it corresponds to
}
export interface SideNavBarProps {
  // navigationItems: [];
  useLinkRefs: Record<string, React.RefObject<HTMLDivElement | null>>;
  // make it objects of hrefs buttons
  sectionRef: React.RefObject<HTMLDivElement | null>;
}
export function SideNavBar(props: SideNavBarProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      // at threshold 0.1, the section is considered visible if at least 10% of it is in the viewport
      // set show is set to whether it is intersecting or not
      setShow(entry.isIntersecting);
    }, { threshold: 0.1 });

    const section = props.sectionRef.current;
    if (section) {
      obs.observe(section);
    }

    // cleanup, stop observing it
    return () => {
      if (section) {
        obs.unobserve(section);
      }
    };
  }, []);
  // empty dependency array, nothing it depends on, only runs once on mount and unmount

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="side-nav-bar" >
      <Offcanvas show={show} onHide={() => setShow(false)} placement="start" scroll={true} backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>Current Project</h3>
          <div className="navbar-buttons-container">
            {Object.entries(props.useLinkRefs).map(([id, ref]) => (
              <Button className="navbar-button w-auto" size='sm' variant="primary" key={id} onClick={() => scrollToSection(ref)}>
                {id}
              </Button>
              // <Nav.Link key={id} onClick={() => scrollToSection(ref)}>
              //   {id}
              // </Nav.Link>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}
