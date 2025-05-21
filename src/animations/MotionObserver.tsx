import { motion, MotionProps } from "motion/react";
import { useInView } from "react-intersection-observer";

type MotionObserverProps = MotionProps & {
  children: React.ReactNode;
};

export default function MotionObserver({
  children,
  ...props
}: MotionObserverProps) {
  const { ref, inView } = useInView({ threshold: 0.9, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      {...props}
    >
      {children}
    </motion.div>
  );
}
