"use client";
import Snowfall from "react-snowfall";

const isWinter = () => {
  const now = new Date();
  const m = now.getMonth(); // 0-based
  const d = now.getDate();
  // Dec 1 – Feb 28/29; adjust as needed
  const inDec = m === 11;
  const inJan = m === 0;
  const inFeb = m === 1 && d <= 29;
  return inDec || inJan || inFeb;
};

export default function SnowOverlay() {
  if (!isWinter()) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <Snowfall
        snowflakeCount={120}
        speed={[0.8, 1.8]}
        wind={[-0.3, 0.6]}
        radius={[1.2, 3.2]}
        color="rgba(255,255,255,0.85)"
       />

    </div>
  );
}