import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
}

const MagneticButton = ({ children, onClick, variant, size, className }: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={className}
        onClick={onClick}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default MagneticButton;
