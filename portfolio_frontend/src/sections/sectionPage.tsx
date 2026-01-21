import '../stylesheet.css';

export function SectionPage(props: {displayComponent: React.ComponentType}) {
  return (
    <section className='section-page'>
      <props.displayComponent />
    </section>
  )
}
