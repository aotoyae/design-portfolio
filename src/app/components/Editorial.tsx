import Image from 'next/image';

const Editorial = () => {
  return (
    <main className="pb-60 flex flex-col items-center gap-32">
      <Image
        src="/images/editorial/cover.png"
        alt="도록 표지"
        width={1000}
        height={600}
        className="py-10"
      />
      <section className="w-1/2 flex flex-col">
        <Image
          src="/images/editorial/book_1.png"
          alt="도록 내지"
          width={800}
          height={600}
        />
        <Image
          src="/images/editorial/book_2.png"
          alt="도록 내지"
          width={800}
          height={600}
        />
        <Image
          src="/images/editorial/book_3.png"
          alt="도록 내지"
          width={800}
          height={600}
        />
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
          <Image
            src="/images/editorial/print_1.png"
            alt="인쇄 감리"
            width={400}
            height={600}
          />
          <Image
            src="/images/editorial/print_2.png"
            alt="도록 진열"
            width={400}
            height={600}
          />
          <Image
            src="/images/editorial/print_3.png"
            alt="도록 진열"
            width={400}
            height={600}
          />
        </div>
      </section>
    </main>
  );
};

export default Editorial;
