'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
}

export function FadeIn({ children, delay = 0, direction = 'up', className }: FadeInProps) {
  const vectors = {
    up:    { initial: { y: 24 }, animate: { y: 0 } },
    down:  { initial: { y: -24 }, animate: { y: 0 } },
    left:  { initial: { x: 24 }, animate: { x: 0 } },
    right: { initial: { x: -24 }, animate: { x: 0 } },
    none:  { initial: {}, animate: {} },
  }
  return (
    <motion.div
      initial={{ opacity: 0, ...vectors[direction].initial }}
      whileInView={{ opacity: 1, ...vectors[direction].animate }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
