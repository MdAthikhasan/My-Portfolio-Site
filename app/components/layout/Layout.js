"use client";
import { Suspense, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import LoadingSpinner from '../ui/LoadingSpinner';
import { useScrollPosition } from '@/app/hooks/useScrollPosition';
import { trackPageView } from '@/app/lib/analytics';

// const pageTransition = {
//   hidden: { opacity: 0, y: 20 },
//   enter: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -20 }
// };

const Layout = ({ children }) => {
  const pathname = usePathname();
  const scrollPosition = useScrollPosition();

  // Track page views
  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative">
      <Header 
        currentPath={pathname} 
        isScrolled={scrollPosition > 50}
      />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          // initial="hidden"
          // animate="enter"
          // exit="exit"
          // variants={pageTransition}
          // transition={{ duration: 0 }}
          className="pt-20 pb-16 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[90vh]"
        >
          <Suspense fallback={<LoadingSpinner />}>
            {children}
          </Suspense>
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default Layout; 