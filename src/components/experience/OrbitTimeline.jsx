import MobileOrbitArc from "./MobileOrbitArc";
import DesktopOrbitArc from "./DesktopOrbitArc";

function OrbitTimeline({ experiences, activeIndex, onSelect }) {
  const total = experiences.length || 1;
  const prevIdx = (activeIndex - 1 + total) % total;
  const nextIdx = (activeIndex + 1) % total;

  const visibleNodes = [
    { item: experiences[prevIdx] || experiences[0], slot: "top", index: prevIdx, xOffset: 0 },
    { item: experiences[activeIndex] || experiences[0], slot: "middle", index: activeIndex, xOffset: 70 },
    { item: experiences[nextIdx] || experiences[0], slot: "bottom", index: nextIdx, xOffset: 0 },
  ];

  return (
    <>
      <MobileOrbitArc
        experiences={experiences}
        activeIndex={activeIndex}
        total={total}
        onSelect={onSelect}
      />
      <DesktopOrbitArc
        visibleNodes={visibleNodes}
        activeIndex={activeIndex}
        onSelect={onSelect}
      />
    </>
  );
}

export default OrbitTimeline;
