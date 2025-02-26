import React from "react";
import FallingSnowflakes from "@/components/falling-snowflakes";

export default function Home() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <FallingSnowflakes />
    </div>
  );
}
