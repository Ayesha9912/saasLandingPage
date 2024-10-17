import React, { useState } from "react";
import icons1 from '../assets/icons1.png'
import icons2 from '../assets/icons5.png'
import icons3 from '../assets/icons4.png'
import tiktok from '../assets/icons6.png'

const icons = [
  { name: "Instagram", imgSrc: icons1, tagline: "Followers, views, likes and shares" },
  { name: "Twitter", imgSrc: icons2 , tagline: "Subscribers, views, posts and post"},
  { name: "Facebook", imgSrc: icons3 , tagline: "Facebook publishing platform" },
  { name: "TikTok", imgSrc: tiktok , tagline: "TikTok Ads publishing platform" },
  // Add more icons here...
];
const IconWithTooltip = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="flex justify-center gap-x-9">
      {icons.map((icon) => (
        <div
          key={icon.name}
          className="relative"
          onMouseEnter={() => setHoveredIcon(icon.name)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img src={icon.imgSrc} alt={icon.name} className="w-12 cursor-pointer" />
          {hoveredIcon === icon.name && (
            <div className="absolute w-[200px] bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs p-2 rounded-md shadow-lg">
              {icon.tagline}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default IconWithTooltip;
