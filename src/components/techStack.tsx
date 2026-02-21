
export function TechStack() {
  const images = import.meta.glob('../assets/techstack/*', { eager: true, as: 'url' });
  const imageElements = [];
  const icons8 = 'https://icons8.com/';
  for (const path in images) {
    imageElements.push(
      <div className="tech-stack-icon">
        <a href={icons8} target="_blank" rel="noopener noreferrer"> </a>

        <img key={path} src={images[path]} alt="icon by Icons8" />
      </div>
    )
  }
  return (

    <div className="tech-stack-container">
      {imageElements}

    </div>
  )
}
