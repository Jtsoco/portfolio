interface controlsProps {
  action: string;
  method: string;
}
export function GameControlsComponent(props: controlsProps) {
  return (
      <div className="game-controls">
        <div className="game-controls-card">
          <p className="fw-bold">{props.action}</p>
          <p>{props.method}</p>
      </div>
    </div>
  )
}
