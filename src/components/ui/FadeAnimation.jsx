import { motion } from "framer-motion";

const FadeAnimation = ({
  className,
  id,
  as = "div",
  children,
  opacity = 1,
  y = 34,
  once = true,
  duration = 0.9,
  ...props
}) => {
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity, y: 0 }}
      viewport={{ once: once }}
      transition={{ duration, ease: "easeOut" }}
      id={id}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export default FadeAnimation;
