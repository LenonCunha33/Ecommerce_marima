import { motion } from "framer-motion";

const colors = ["#DCDCDC", "#696969", "#363636", "#1C1C1C"];

export default function GoogleLoader() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex space-x-2">
        {colors.map((color, i) => (
          <motion.span
            key={i}
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
