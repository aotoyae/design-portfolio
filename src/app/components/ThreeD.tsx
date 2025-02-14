import Image from 'next/image';
import helmet1 from '@/app/assets/threeD/helmet_1.png';
import helmet2 from '@/app/assets/threeD/helmet_2.png';
import snowball1 from '@/app/assets/threeD/snowball_1.jpg';
import snowball2 from '@/app/assets/threeD/snowball_2.jpg';
import watch1 from '@/app/assets/threeD/watch_1.jpg';
import watch2 from '@/app/assets/threeD/watch_2.jpg';
import tae1 from '@/app/assets/threeD/tae_1.png';
import tae2 from '@/app/assets/threeD/tae_2.png';
import modoriteo1 from '@/app/assets/threeD/modoriteo_1.png';
import modoriteo2 from '@/app/assets/threeD/modoriteo_2.png';
import modoriteo3 from '@/app/assets/threeD/modoriteo_3.png';
import modoriteo4 from '@/app/assets/threeD/modoriteo_4.png';

const ThreeD = () => {
  return (
    <main className="pt-10 pb-48 w-full flex flex-col gap-20">
      <Image src={helmet1} alt="투구 모델링" />
      <Image src={helmet2} alt="투구 모델링" />
      <Image src={snowball1} alt="스노우볼 모델링" />
      <Image src={snowball2} alt="스노우볼 모델링" />
      <Image src={watch2} alt="시계 모델링" />
      <Image src={watch1} alt="시계 모델링" />
      <Image src={tae1} alt="행거 모델링" />
      <Image src={tae2} alt="행거 모델링" />
      <Image src={modoriteo1} alt="문화공간 모델링" />
      <Image src={modoriteo2} alt="문화공간 모델링" />
      <Image src={modoriteo3} alt="문화공간 모델링" />
      <Image src={modoriteo4} alt="문화공간 모델링" />
    </main>
  );
};

export default ThreeD;
