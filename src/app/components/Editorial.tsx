import Image from 'next/image';
import cover from '@/app/assets/editorial/cover.png';
import book1 from '@/app/assets/editorial/book_1.png';
import book2 from '@/app/assets/editorial/book_2.png';
import book3 from '@/app/assets/editorial/book_3.png';
import print1 from '@/app/assets/editorial/print_1.png';
import print2 from '@/app/assets/editorial/print_2.png';
import print3 from '@/app/assets/editorial/print_3.png';

const Editorial = () => {
  return (
    <main className="pb-60 flex flex-col gap-32">
      <Image src={cover} alt="도록 표지" />
      <section className="w-1/2 flex flex-col">
        <Image src={book1} alt="도록 내지" />
        <Image src={book2} alt="도록 내지" />
        <Image src={book3} alt="도록 내지" />
      </section>
      <section className="pl-10 flex flex-col gap-10">
        <div>
          <h6 className="font-bold pb-2">
            졸업작품 도록 디자인 및 인쇄 과정 참여
          </h6>
          <p>
            졸업 전시 위원회 도록팀에 참여하여 도록의 전체적인 디자인과 편집,
            인쇄 과정을 담당하였습니다.
          </p>
        </div>
        <div className="w-1/5 flex gap-2">
          <Image src={print1} alt="인쇄 감리" />
          <Image src={print2} alt="도록 진열" />
          <Image src={print3} alt="도록 진열" />
        </div>
      </section>
    </main>
  );
};

export default Editorial;
