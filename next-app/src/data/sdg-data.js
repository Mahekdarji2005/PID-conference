export const SDG_INFO = {
  1: { number: 1, name: "No Poverty", image: "/SDG's/sdg1.png" },
  2: { number: 2, name: "Zero Hunger", image: "/SDG's/sdg2.png" },
  3: { number: 3, name: "Good Health and Well-being", image: "/SDG's/sdg3.png" },
  4: { number: 4, name: "Quality Education", image: "/SDG's/sdg4.png" },
  5: { number: 5, name: "Gender Equality", image: "/SDG's/sdg5.png" },
  6: { number: 6, name: "Clean Water and Sanitation", image: "/SDG's/sdg6.png" },
  7: { number: 7, name: "Affordable and Clean Energy", image: "/SDG's/sdg7.png" },
  8: { number: 8, name: "Decent Work and Economic Growth", image: "/SDG's/sdg8.png" },
  9: { number: 9, name: "Industry, Innovation and Infrastructure", image: "/SDG's/sdg9.png" },
  10: { number: 10, name: "Reduced Inequalities", image: "/SDG's/sdg10.png" },
  11: { number: 11, name: "Sustainable Cities and Communities", image: "/SDG's/sdg11.png" },
  12: { number: 12, name: "Responsible Consumption and Production", image: "/SDG's/sdg12.png" },
  13: { number: 13, name: "Climate Action", image: "/SDG's/sdg13.png" },
  14: { number: 14, name: "Life Below Water", image: "/SDG's/sdg14.png" },
  15: { number: 15, name: "Life on Land", image: "/SDG's/sdg15.png" },
  16: { number: 16, name: "Peace, Justice and Strong Institutions", image: "/SDG's/sdg16.png" },
  17: { number: 17, name: "Partnerships for the Goals", image: "/SDG's/sdg17.png" },
};

export const TRACK_SDGS = {
  "1": [8, 9, 11, 12],
  "2": [4, 11, 12, 13],
  "3": [4, 5, 10, 16],
  "4": [2, 3, 6, 11, 12, 13, 14, 15],
  "5": [9, 16, 17],
  "6": [4, 17],
  "7": [3, 13, 16, 17],
};

export function getTrackSdgs(trackId) {
  const ids = TRACK_SDGS[String(trackId)] || [];
  return ids.map((id) => SDG_INFO[id]).filter(Boolean);
}
