import Image from 'next/image';

const TwoD = () => {
  return (
    <main className="pb-60 flex flex-col gap-40">
      <section className="flex justify-between items-center gap-10">
        <div className="w-4/6 flex flex-col gap-32">
          <Image
            src="/images/twoD/team_gato.png"
            alt="축구팀 가토"
            width={600}
            height={100}
          />
          <div>
            <h6 className="font-bold pb-2">축구팀 FC GATO 로고 제작</h6>
            <p>부천 축구팀 FC GATO의 로고를 디자인하였습니다.</p>
          </div>
        </div>
        <div className="w-2/6">
          <Image
            src="/images/twoD/gato_line_1.png"
            alt="축구팀 가토 로고 스케치"
            width={300}
            height={300}
          />
          <Image
            src="/images/twoD/gato_line_2.png"
            alt="축구팀 가토 로고 스케치"
            width={300}
            height={300}
          />
          <Image
            src="/images/twoD/gato_logo.png"
            alt="축구팀 가토 로고"
            width={300}
            height={300}
          />
        </div>
      </section>
      <section className="pl-10 flex gap-14">
        <div className="w-1/2 flex flex-col gap-32">
          <Image
            src="/images/twoD/letter_1.jpg"
            alt="엽서 일러스트"
            width={400}
            height={500}
          />
          <Image
            src="/images/twoD/letter_2.jpg"
            alt="엽서 일러스트"
            width={400}
            height={500}
          />
          <Image
            src="/images/twoD/letter_3.jpg"
            alt="엽서 일러스트"
            width={400}
            height={500}
          />
        </div>
        <div className="w-1/2 pt-14 flex flex-col gap-28">
          <div className="pl-[20vw]">
            <Image
              src="/images/twoD/letter_mockup_1.jpeg"
              alt="엽서"
              width={300}
              height={400}
              className="pb-4"
            />
            <Image
              src="/images/twoD/letter_mockup_2.jpeg"
              alt="엽서"
              width={300}
              height={400}
            />
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
