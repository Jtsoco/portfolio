import '../stylesheet.css';
interface introProps {
  targetRef: React.RefObject<null | HTMLElement>;
}
import Button from 'react-bootstrap/Button';
export function IntroductionSection(props: introProps) {

  const onClickAboutMe = () => {
    if (props.targetRef && props.targetRef.current) {
      props.targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="section-page">
      <div>

        <h1> Hi, I'm <span className="blue">Jackson</span>.</h1>
        <h2> I'm a programmer and Teacher </h2>
        <Button onClick={() => onClickAboutMe()}variant="primary" >About Me and Projects</Button>

      </div>
    </div>
  )
}
