import '../stylesheet.css';
import { TechStack } from "../components/techStack"
import { useContext } from "react"
import { LanguageContext } from "../contexts/languageContext"
import Image from 'react-bootstrap/Image';



interface aboutProps {
 targetRef: React.RefObject<null>;
}
export function AboutSection(props: aboutProps) {

  const languageContext = useContext(LanguageContext);
  const aboutText = languageContext[languageContext.getLanguage].about.paragraph1;
  return (
    <div className="section-page" ref={props.targetRef}>

      <div className="about-section">
        <div className="section-title">About</div>
        <div className="about-section-content">
          <div className="about-me">
            <Image src="public/images/jtsoco.jpg" roundedCircle className="about-image" alt="Picture of Jackson Soco" />
            <div className="about-text">
              <p>
                {aboutText}
              </p>
            </div>
          </div>
          <div className="techstack">
            <TechStack />
          </div>
        </div>

      </div>
    </div>
  )
}
