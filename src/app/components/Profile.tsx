import Link from 'next/link';

const Profile = () => {
  return (
    <main className="grid grid-cols-7 gap-6 py-4 pl-4">
      <section className="col-span-2 flex flex-col gap-[50vh]">
        <h6 className="font-bold">김소현 sohyeon kim</h6>
        <p className="leading-relaxed">
          산업디자인을 전공한 후, 웹 분야에 관심을 갖게 되어 퍼블리싱과
          프론트엔드 개발을 공부하고 있습니다. 시각적인 요소에 대한 호기심이
          많으며, 인터랙티브한 웹 경험을 만드는 데 열정을 가지고 있습니다.
          소비자 중심적인 사고와 긍정적인 소통 방식을 중요하게 생각합니다.
          contact:&nbsp;
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'mailto:aotoyae@gamil.com';
            }}
            className="underline underline-offset-2"
          >
            aotoyae@gmail.com
          </Link>
        </p>
      </section>
      <section className="flex flex-col gap-[50vh]">
        <h6 className="font-bold">skills</h6>
        <ul className="leading-relaxed">
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Indesign</li>
          <li>Rhino</li>
          <li>Keyshot</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
        </ul>
      </section>
      <section className="col-span-2 flex flex-col gap-[50vh]">
        <h6 className="font-bold">academic background</h6>
        <article className="leading-relaxed">
          <div className="flex gap-2">
            <p>2024</p>
            <p>팀스파르타 내일배움캠프 프론트엔드 과정</p>
          </div>
          <div className="flex gap-2">
            <p>2022</p>
            <p>그린컴퓨터아카데미 반응형 웹디자인/웹퍼블리셔 과정</p>
          </div>
          <div className="flex gap-2">
            <p>2022</p>
            <p>협성대학교 산업디자인학과 졸업</p>
          </div>
          <div className="flex gap-2">
            <p>2021</p>
            <div>
              <p>졸업전시위원회 도록팀</p>
              <p className="text-deep-gray">
                도록 레이아웃 디자인, 인쇄 과정 담당
              </p>
              <p>예술대학 학생회 문화부장</p>
              <p className="text-deep-gray">예술대 이벤트 기획 및 자료 제작</p>
              <p>교내 SNS 홍보단 협성대스타</p>
              <p className="text-deep-gray">
                교내 홍보물 콘텐츠 제작 및 포스팅
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <p>2019</p>
            <div>
              <p>산업디자인학과 학생회 문화국장</p>
              <p className="text-deep-gray">
                학과내 행사 포스터 및 플랜카드 제작
              </p>
            </div>
          </div>
        </article>
      </section>
      <section className="col-span-2 flex flex-col gap-[50vh]">
        <h6 className="font-bold">experience</h6>
        <article className="leading-relaxed">
          <div className="flex gap-2">
            <p>2021</p>
            <div>
              <p>두타몰 왕홍 스튜디오 부스 모델링 (외주)</p>
              <p className="text-deep-gray">부스 시안 모델링 작업</p>
            </div>
          </div>
          <div className="flex gap-2">
            <p>2020</p>
            <div>
              <p>페이퍼먼츠 디자인팀 (6개월)</p>
              <p className="text-deep-gray">- 여성 의류 쇼핑몰</p>
              <p className="text-deep-gray">상세페이지 제작 및 촬영 보조</p>
            </div>
          </div>
          <div className="flex gap-2">
            <p>2019</p>
            <div>
              <p>제이에스벤처스 마케팅팀 (6개월)</p>
              <p className="text-deep-gray">- 미디어 커머스 기업</p>
              <p className="text-deep-gray">바이럴 광고 영상 기획, 연출 보조</p>
              <p className="text-deep-gray">
                신제품 광고 카드뉴스 제작 및 포스팅
              </p>
              <p>커뮤니케이션 디자인 국제 공모전 입선</p>
              <p className="text-deep-gray">
                - 한국 커뮤니케이션 디자인 협회 주관
              </p>
              <p className="text-deep-gray">
                피임 권장을 위한 콘돔 광고 포스터
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Profile;
