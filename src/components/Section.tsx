import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(({ children, className, ...props }, ref) => {
  return (
    <motion.section
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.section>
  );
});

Section.displayName = 'Section';

export default Section;
