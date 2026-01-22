
export function techStack() {
  const images = import.meta.glob('../assets/techstack/*', { eager: true, as: 'url' });
  return (

    <div className="tech-stack">

    </div>
  )
}
