"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Star from "@/components/ui/icons/vector/star";

export default function SpinningStar({duration=5, size, className, direction=1}) {
  const starRef = useRef(null);

  useEffect(() => {
    if (starRef.current) {
      gsap.to(starRef.current, {
        rotation: 360 * direction,
        transformOrigin: "50% 50%",
        repeat: -1,
        duration: duration,
        ease: "linear",
      });
    }
  }, []);

  const handleClick = () => {
    if (starRef.current) {
      // Быстрый оборот на 360° за 0.5 секунды
      gsap.to(starRef.current, {
        rotation: `+=${(360 + (360 / duration * 0.5)) * direction}`,   // "+=" позволяет добавить к текущему положению
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };

  return (
    <Star
      ref={starRef}
      size={size}
      className={className}
      onClick={handleClick}
    />
  );
}