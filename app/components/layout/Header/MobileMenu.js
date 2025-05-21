import { motion } from 'framer-motion';
import Link from 'next/link';
import { navigationLinks } from '@/app/constants/navigation';
// import ThemeToggle from './ThemeToggle';

const menuVariants = {
  hidden: {
    opacity: 0,
    translateY: "-100%"
  },
  visible: {
    opacity: 1,
    translateY: "0%",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    translateY: "-100%",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const MobileMenu = ({ currentPath, onClose }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      className="fixed inset-0 bg-gradient-to-b from-gray-900/95 to-black/95 
        backdrop-blur-xl md:hidden"
    >
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
        {navigationLinks.map((link, index) => (
          <motion.div
            key={link.path}
            custom={index}
            variants={itemVariants}
          >
            <Link
              href={link.path}
              onClick={onClose}
              className={`relative text-2xl font-medium transition-colors duration-300 
                hover:text-purple-400 ${
                currentPath === link.path 
                  ? 'text-purple-400' 
                  : 'text-white/80'
              }`}
            >
              {link.label}
              {currentPath === link.path && (
                <motion.div
                  layoutId="mobileNavIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r 
                    from-purple-400 to-pink-500"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </Link>
          </motion.div>
        ))}
        
        <motion.div
          variants={itemVariants}
          custom={navigationLinks.length}
          className="mt-8"
        >
          {/* <ThemeToggle /> */}
        </motion.div>
      </div>

      {/* Background Patterns */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/20 
          rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/20 
          rounded-full blur-[120px]" />
      </div>
    </motion.div>
  );
};

export default MobileMenu; 