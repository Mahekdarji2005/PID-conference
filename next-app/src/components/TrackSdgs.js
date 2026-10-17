import { getTrackSdgs } from "@/data/sdg-data";

export default function TrackSdgs({ trackId, variant = "detail" }) {
  const sdgs = getTrackSdgs(trackId);
  if (!sdgs || sdgs.length === 0) return null;

  if (variant === "card") {
    return (
      <div className="track-card-sdgs">
        {sdgs.map((sdg) => (
          <div
            key={sdg.number}
            className="track-card-sdg-tile"
            title={`SDG ${sdg.number} – ${sdg.name}`}
          >
            <img
              src={sdg.image}
              alt={`SDG ${sdg.number} – ${sdg.name}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="track-sdg-section">
      <div className="track-sdg-label">
        <i className="fa-solid fa-leaf"></i> ALIGNED SUSTAINABLE DEVELOPMENT GOALS
      </div>
      <div className="track-sdg-grid">
        {sdgs.map((sdg) => (
          <div
            key={sdg.number}
            className="track-sdg-tile"
            title={`SDG ${sdg.number} – ${sdg.name}`}
          >
            <img
              src={sdg.image}
              alt={`SDG ${sdg.number} – ${sdg.name}`}
              className="track-sdg-icon"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
