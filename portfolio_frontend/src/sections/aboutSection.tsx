import '../stylesheet.css';
import { TechStack } from "../components/techStack"
import { useContext } from "react"
import { LanguageContext } from "../contexts/languageContext"


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
            <div className="placeholder-image">This is a placeholder image</div>
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
