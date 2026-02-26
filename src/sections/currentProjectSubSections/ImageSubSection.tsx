import Image from 'react-bootstrap/Image';
export interface ImageSubSectionProps {
  className: string;
  src: string;
  alt: string;
  title: string;

}

export function ImageSubSection(props: ImageSubSectionProps) {

  return (

        <div className="image-subsection">
          <h3>{props.title}</h3>
          <Image src={props.src} alt={props.alt} className={props.className + " current-project-image"} />
        </div>
  )
}
