'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const accordionData = [
  { title: 'Sohyeon Kim', content: '첫 번째 패널의 내용입니다.' },
  { title: '패널 2', content: '두 번째 패널의 내용입니다.' },
  { title: '패널 3', content: '세 번째 패널의 내용입니다.' },
  { title: '패널 4', content: '네 번째 패널의 내용입니다.' },
  { title: '패널 5', content: '다섯 번째 패널의 내용입니다.' },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full overflow-hidden border rounded-lg h-[100vh]">
        {accordionData.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex items-center justify-center overflow-hidden border-r border-gray-300 cursor-pointer"
            onClick={() => toggleAccordion(index)}
            initial={false} // 첫 클릭 시에도 애니메이션 적용
            animate={{ flex: openIndex === index ? 10 : 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <p className="absolute text-lg font-semibold vertical-english top-2 right-2">
              {item.title}
            </p>
            <motion.div
              className="p-4 text-center text-gray-700"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: openIndex === index ? 1 : 0,
                scale: openIndex === index ? 1 : 0.95,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {openIndex === index && item.content}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
