import "./AmbientBackground.css";

function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <span className="ambient-blob ambient-blob-a" />
      <span className="ambient-blob ambient-blob-b" />
      <span className="ambient-blob ambient-blob-c" />
      <span className="ambient-blob ambient-blob-d" />
      <span className="ambient-grid" />
    </div>
  );
}

export default AmbientBackground;
