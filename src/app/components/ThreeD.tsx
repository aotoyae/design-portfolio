import Image from 'next/image';
import helmet1 from '@/app/assets/threeD/helmet_1.png';
import helmet2 from '@/app/assets/threeD/helmet_2.png';
import snowball1 from '@/app/assets/threeD/snowball_1.jpg';
import snowball2 from '@/app/assets/threeD/snowball_2.jpg';
import vans from '@/app/assets/threeD/vans.jpg';
import watch1 from '@/app/assets/threeD/watch_1.jpg';
import watch2 from '@/app/assets/threeD/watch_2.jpg';

const ThreeD = () => {
  return (
    <main className="w-full flex flex-col gap-48 py-32">
      <Image src={helmet1} alt="투구 모델링" />
      <Image src={helmet2} alt="투구 모델링" />
      <Image src={snowball1} alt="스노우볼 모델링" />
      <Image
        src={snowball2}
        alt="스노우볼 모델링"
        className="pl-14 pr-40 pb-20"
      />
      <Image src={vans} alt="반스 물병 모델링" className="pl-60 pr-20" />
      <Image src={watch2} alt="시계 모델링" />
      <Image src={watch1} alt="시계 모델링" className="pl-20 pr-32" />
    </main>
  );
};

export default ThreeD;
