import React, { useState } from "react";
import { motion } from "framer-motion";

const BentoGridItem = ({ title, description, backgroundImage, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-white dark:bg-black border border-gray-200 dark:border-gray-800 transition-all duration-500 ease-out ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500" />
      </div>

      {/* Text */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
        <motion.div
          initial={{ y: 20, opacity: 0.8 }}
          animate={{
            y: isHovered ? 0 : 10,
            opacity: isHovered ? 1 : 0.9,
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-sm">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </motion.div>
  );
};

const BentoGrid = () => {
  const items = [
    {
      title: "Premium Collection",
      description: "Experience luxury in every step with our finest crafted footwear.",
      backgroundImage: "/src/assets/assets/new_frontend_assets/bag6.jpg",
      className: "col-span-1 xl:col-span-2 row-span-1 min-h-[300px] xl:min-h-[400px]",
    },
    {
      title: "Casual Comfort",
      description: "Everyday essentials designed for ultimate comfort.",
      backgroundImage: "/src/assets/assets/new_frontend_assets/grid2.jpg",
      className: "col-span-1 row-span-1 min-h-[300px]",
    },
    {
      title: "Sport Series",
      description: "Performance footwear for your active lifestyle.",
      backgroundImage: "/src/assets/assets/new_frontend_assets/grid5.jpg",
      className: "col-span-1 row-span-1 min-h-[300px] xl:min-h-[250px]",
    },
    {
      title: "Limited Edition",
      description: "Exclusive designs for the fashion-forward.",
      backgroundImage: "/src/assets/assets/new_frontend_assets/grid4.jpg",
      className: "col-span-1 xl:col-span-2 row-span-1 min-h-[300px] xl:min-h-[350px]",
    },
    {
      title: "Seasonal Collection",
      description: "The perfect footwear for every season.",
      backgroundImage: "/src/assets/assets/new_frontend_assets/grid6.jpg",
      className: "col-span-1 row-span-2 min-h-[600px] xl:min-h-[700px]",
    },
    {
      title: "Designer Series",
      description: "Artistically crafted for the distinguished taste.",
      backgroundImage: "/src/assets/assets/new_frontend_assets/grid7.jpg",
      className: "col-span-1 row-span-2 min-h-[600px] xl:min-h-[700px]",
    },
    // ✅ Added missing two boxes
    {
      title: "Artisan Craftsmanship",
      description: "Every piece is handcrafted by skilled artisans who take pride in their work.",
        backgroundImage: "/src/assets/assets/new_frontend_assets/grid3.jpg",
      className: "col-span-1 row-span-1 min-h-[300px] xl:min-h-[340px]",
    },
    {
      title: "Exclusive Drop",
      description: "Unique designs available for a limited time only.",
      backgroundImage: "/src/assets/assets/new_frontend_assets/grid8.jpg",
      className: "col-span-1 row-span-1 min-h-[300px] xl:min-h-[340px]",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-black py-20">
      <div className="max-w-[95vw] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Collections
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our carefully curated selection of premium footwear designed for style and comfort.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 auto-rows-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                type: "spring",
                damping: 25,
              }}
              className={item.className}
            >
              <BentoGridItem {...item} className="h-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default function BentoGridDemo() {
  return <BentoGrid />;
}
