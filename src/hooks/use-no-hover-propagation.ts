import React, { useState } from "react";

export const useNoHoverPropagation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsHovered(true);
  };

  const handleMouseOut = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsHovered(false);
  };

  return {
    isHovered,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
  };
};
