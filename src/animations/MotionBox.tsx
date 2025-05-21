import { motion, MotionProps } from "motion/react";
import { useLocation } from "react-router";

type MotionBoxProps = MotionProps & {
  children: React.ReactNode;
};

export default function MotionBox({ children, ...props }: MotionBoxProps) {
  const { pathname } = useLocation();
  return (
    <motion.div key={pathname} initial="hidden" animate="visible" {...props}>
      {children}
    </motion.div>
  );
}
