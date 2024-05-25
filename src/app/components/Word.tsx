import { motion, motionValue, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './style.module.scss';

export default function Paragraph({paragraph}: {paragraph: string}) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  })

const words = paragraph.split(" ")
return (
    <p 
        ref={container}         
        className={styles.paragraph}
    >
    {
        words.map( (word, i) => {
            const start = i / words.length
            const end = start + (1 / words.length)
            return <Word key={i} progress={motionValue(scrollYProgress.get())} range={[start, end]}>{word}</Word>
        })
    }
    </p>
)
}

import { MotionValue } from 'framer-motion';

const Word = ({children, progress, range}: {children: React.ReactNode, progress: MotionValue<number>, range: number[]}) => {
    const opacity = useTransform(progress, range, [0, 1])
    return <span className={styles.word}>
        <span className={styles.shadow}>{children}</span>
        <motion.span style={{opacity: opacity}}>{children}</motion.span>
    </span>
}