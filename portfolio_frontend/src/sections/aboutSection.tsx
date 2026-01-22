import { TechStack } from "../components/techStack"
export function AboutSection() {
  return (
    <div className="about-section">
      <div className="section-title">About</div>
      <div className="about-section-content">
        <div className="about-me">
          <div className="placeholder-image">This is a placeholder image</div>
          <div className="about-text">
            <p>

            </p>
          </div>
        </div>
        <div className="techstack">
          <TechStack />
        </div>
      </div>

    </div>
  )
}
