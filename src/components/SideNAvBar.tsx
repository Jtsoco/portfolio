import { useState, useEffect, useRef } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';

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
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      // at threshold 0.1, the section is considered visible if at least 10% of it is in the viewport
      // set show is set to whether it is intersecting or not
      setShow(entry.isIntersecting);
      if (entry.isIntersecting) {
        setCollapsed(false);
      }
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

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  const collapseNonEssentialElements = () => {
    if (containerRef.current && headerRef.current) {
      if (collapsed) {
        containerRef.current.classList.remove('offcanvas-hide')
        containerRef.current.classList.add('offcanvas-show');
        headerRef.current.classList.add('offcanvas-show');
        headerRef.current.classList.remove('offcanvas-hide');

      }
      else {
        containerRef.current.classList.add('offcanvas-hide')
        containerRef.current.classList.remove('offcanvas-show');
        headerRef.current.classList.remove('offcanvas-show');
        headerRef.current.classList.add('offcanvas-hide');

      }
      console.log('toggled')
    }
    setCollapsed(!collapsed);
  }

  const toggleRef = useRef<HTMLButtonElement | null>(null);
  let fullName = true;
  if (window.matchMedia("(max-width: 768px)").matches) {
    fullName = false;
  }
  const getButtons = () => {


    return (
        <Offcanvas.Body>
          <div className="canvas-body-container">
          <div className="nav-header-container">

           <Button ref={toggleRef} className="side-nav-toggle" variant="outline-info" size='sm' onClick={collapseNonEssentialElements}>{collapsed ? '->' : '<-'}</Button>
          <h5 ref={headerRef}>
            {fullName ? 'Current Project' : ''}

          </h5>
          </div>
            <div className="navbar-buttons-container" ref={containerRef}>
            <Button className="navbar-button w-auto" size='sm' variant="primary" onClick={() => scrollToSection(props.sectionRef)}>
              {fullName ? 'Overview' : 'top'}
            </Button>
            {Object.entries(props.useLinkRefs).map(([id, ref], index) => (
              <Button className="navbar-button w-auto" size='sm' variant="primary" key={id} onClick={() => scrollToSection(ref)}>
                {fullName ? id : index + 1}
              </Button>
            ))}
          </div>
            </div>
        </Offcanvas.Body>
    )
  }

  return (
    <div className="side-nav-bar" >
      <Offcanvas show={show} onHide={() => setShow(false)} placement={"start"} scroll={true} backdrop={false} restoreFocus={false} enforceFocus={false}>

    {getButtons()}

      </Offcanvas>

    </div>
  )
}
