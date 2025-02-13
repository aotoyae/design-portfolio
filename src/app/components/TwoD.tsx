import Image from 'next/image';
import gatoLine1 from '@/app/assets/twoD/gato_line_1.png';
import gatoLine2 from '@/app/assets/twoD/gato_line_2.png';
import gatoLogo from '@/app/assets/twoD/gato_logo.png';
import teamGato from '@/app/assets/twoD/team_gato.png';
import letter1 from '@/app/assets/twoD/letter_1.jpg';
import letter2 from '@/app/assets/twoD/letter_2.jpg';
import letter3 from '@/app/assets/twoD/letter_3.jpg';
import letterMockup1 from '@/app/assets/twoD/letter_mockup_1.jpeg';
import letterMockup2 from '@/app/assets/twoD/letter_mockup_2.jpeg';

const TwoD = () => {
  return (
    <main className="pb-60 flex flex-col gap-40">
      <section className="flex justify-between items-center gap-10">
        <div className="w-4/6 flex flex-col justify-start gap-32">
          <Image src={teamGato} alt="축구팀 가토" />
          <div>
            <h6 className="font-bold pb-2">축구팀 FC GATO 로고 제작</h6>
            <p>부천 축구팀 FC GATO의 로고를 디자인하였습니다.</p>
          </div>
        </div>
        <div className="w-2/6">
          <Image src={gatoLine1} alt="축구팀 가토 로고 스케치" />
          <Image src={gatoLine2} alt="축구팀 가토 로고 스케치" />
          <Image src={gatoLogo} alt="축구팀 가토 로고" />
        </div>
      </section>
      <section className="pl-10 flex gap-14">
        <div className="w-1/2 flex flex-col gap-32">
          <Image src={letter1} alt="엽서 일러스트" />
          <Image src={letter2} alt="엽서 일러스트" />
          <Image src={letter3} alt="엽서 일러스트" />
        </div>
        <div className="w-1/2 pt-14 flex flex-col gap-28">
          <div className="pl-[20vw]">
            <Image src={letterMockup1} alt="엽서" className="pb-4" />
            <Image src={letterMockup2} alt="엽서" />
          </div>
          <div>
            <h6 className="font-bold pb-2">크리스마스 일러스트 엽서 제작</h6>
            <p>
              크리스마스를 연상하는 일러스트를 직접 그려 엽서를 제작하였습니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TwoD;
