import '../stylesheet.css';
interface introProps {
  targetRef: React.RefObject<null>;
}
export function IntroductionSection(props: introProps) {

  const onClickAboutMe = () => {
    if (props.targetRef && props.targetRef.current) {
      props.targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="section-page">
      <div>

        <h1> Hi, I'm <span className="red">Jackson</span>.</h1>
        <h2> I'm a programmer and Teacher </h2>
        <button onClick={() => onClickAboutMe()} >
          About Me and Projects
          </button>
      </div>
    </div>
  )
}
