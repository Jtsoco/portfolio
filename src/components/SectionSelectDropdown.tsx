import { Dropdown } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import React from 'react';
export interface SectionSelectDropdownProps {
  useLinkRefs: Record<string, React.RefObject<HTMLDivElement | null>>;
nonTopRef: React.RefObject<HTMLDivElement | null>;
}

export function SectionSelectDropdown(props: SectionSelectDropdownProps) {

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [show, setShow] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // when the dropdown is visible, we want to hide it, so if it is intersecting, we set show to false
      const element = document.querySelector('.section-select-dropdown');
      setShow(entry.isIntersecting);

      if (element) {
        if (show) {
          element.classList.remove('hidden');
          element.classList.add('visible');
        }
        else {
          element.classList.add('hidden');
          element.classList.remove('visible');
        }

      }

    }, { threshold: 0.1 });


    if (props.nonTopRef.current) {
      observer.observe(props.nonTopRef.current);
    }

    return () => {
      if (props.nonTopRef.current) {
        observer.unobserve(props.nonTopRef.current);
      }
    };
  })

  return (
    <div className="section-select-dropdown fade-in">

      <Dropdown id="dropdown-basic-button">
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Select Section
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {Object.entries(props.useLinkRefs).map(([id, ref]) => (
            <Dropdown.Item key={id} disabled = {!show} onClick={() => scrollToSection(ref)}>
              {id}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
