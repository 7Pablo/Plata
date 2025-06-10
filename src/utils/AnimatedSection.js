'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as animations from '@/utils/scrollAnimations';

export default function AnimatedSection({ children, animation = 'fadeInUp', delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variant = animations[animation] || fadeInUp;

  return (
    <motion.div
      ref={ref}
      initial={variant.initial}
      animate={inView ? variant.animate : variant.initial}
      transition={{ duration: 0.6, delay }}
      exit={variant.exit}
    >
      {children}
    </motion.div>
  );
}
