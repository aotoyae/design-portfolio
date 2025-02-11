'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const accordionData = [
  { title: 'sohyeon kim', content: '첫 번째 패널의 내용입니다.' },
  { title: 'web', content: '두 번째 패널의 내용입니다.' },
  { title: '2D', content: '세 번째 패널의 내용입니다.' },
  { title: '3D', content: '네 번째 패널의 내용입니다.' },
  { title: 'editorial', content: '다섯 번째 패널의 내용입니다.' },
];

const menuColors = [
  'bg-[#A5CBFF]',
  'bg-[#FF2424]',
  'bg-[#FF859A]',
  'bg-[#FCFFD0]',
  'bg-[#D9D9D9]',
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
            className={`relative flex items-center justify-center cursor-pointer ${openIdx === idx ? 'bg-white' : menuColors[idx]}`}
            onClick={() => toggleAccordion(idx)}
            initial={false} // 첫 클릭 시에도 애니메이션 적용
            animate={{ flex: openIdx === idx ? 12 : 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <p className="absolute vertical-english top-2 right-2">
              {item.title}
            </p>
            <motion.div
              className="p-4 text-center text-gray-700"
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
