import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrollGrowHook = (x, y) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.2 1"],
  });
  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const values = useTransform(scrollYProgress, [0, 1], [x, y]);

  const style = { scale: scaleValues, opacity: opacityValues, x: values };
  return { componentRef, style: style };
};

export default useScrollGrowHook;
