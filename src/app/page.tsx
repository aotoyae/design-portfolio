'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Profile from './components/Profile';
import Web from './components/Web';
import TwoD from './components/TwoD';
import ThreeD from './components/ThreeD';
import Editorial from './components/Editorial';

const accordionData = [
  {
    title: 'sohyeon kim',
    content: <Profile />,
    hoverBgColor: 'hover:bg-blue',
  },
  {
    title: 'web',
    content: <Web />,
    hoverBgColor: 'hover:bg-red',
  },
  {
    title: '2D',
    content: <TwoD />,
    hoverBgColor: 'hover:bg-pink',
  },
  {
    title: '3D',
    content: <ThreeD />,
    hoverBgColor: 'hover:bg-lemon',
  },
  {
    title: 'editorial',
    content: <Editorial />,
    hoverBgColor: 'hover:bg-gray',
  },
];

export default function Home() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    if (openIdx === idx) {
      setOpenIdx(0); // 현재 열린 패널을 클릭하면 패널 1로 이동
    } else {
      setOpenIdx(idx); // 클릭한 패널로 변경
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex w-full h-[100vh]">
        {accordionData.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative flex justify-center cursor-pointer bg-transparent group"
            // className={`relative flex justify-center cursor-pointer ${
            //   openIdx === idx
            //     ? 'bg-white'
            //     : `bg-transparent ${item.hoverBgColor}`
            // } `}
            onClick={() => toggleAccordion(idx)}
            initial={false} // 첫 클릭 시에도 애니메이션 적용
            animate={{ flex: openIdx === idx ? 12 : 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <p className="absolute vertical-english top-2 right-2">
              {item.title}
              <span
                className={`pt-2 group-hover:inline ${openIdx !== idx && 'hidden'}`}
              >
                ●
              </span>
            </p>
            <motion.div
              className="pr-20 text-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: openIdx === idx ? 1 : 0,
                scale: openIdx === idx ? 1 : 0.95,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {openIdx === idx && item.content}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
