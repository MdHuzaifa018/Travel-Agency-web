import { useEffect, useState } from 'react';
import { animate } from 'framer-motion';

/**
 * Custom hook for smooth count-up animations using Framer Motion.
 * @param {number} target - The final count value.
 * @param {number} duration - The animation duration in seconds.
 * @param {boolean} trigger - Whether the count-up should start.
 */
export default function useCountUp(target, duration = 2, trigger = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (value) => setCount(Math.round(value)),
    });

    return () => controls.stop();
  }, [target, duration, trigger]);

  return count;
}
