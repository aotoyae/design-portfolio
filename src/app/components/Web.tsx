import Link from 'next/link';
import Image from 'next/image';

const Web = () => {
  return (
    <main className="pb-60 flex flex-col items-center gap-32">
      <section className="w-full flex flex-col items-center">
        <Image
          src="/images/web/granhand_imac.png"
          alt="그랑핸드 아이맥 목업"
          width={1300}
          height={600}
        />
        <div className="pb-60 flex flex-col items-center">
          <h6 className="font-bold pb-2">
            HTML| CSS 를 활용한 그랑핸드 홈페이지 디자인 및 구성
          </h6>
          <div className="flex gap-4 underline underline-offset-1">
            <Link
              href="http://kms2hn.dothome.co.kr/GRANHAND/main.html"
              target="_blank"
            >
              link
            </Link>
            <Link href="https://github.com/aotoyae/granhand" target="_blank">
              github
            </Link>
          </div>
        </div>
        <section className="pb-10 grid grid-cols-4 gap-2">
          <article className="pl-3 pr-1">
            <h6 className="font-bold pb-2">01 MAIN PAGE</h6>
            <p className="leading-relaxed">
              그랑핸드의 메인 페이지입니다.
              <br />
              베스트/큐레이션 제품, 브랜드 스토리를 확인할 수 있으며, 다섯 곳의
              매장 사진에 커서를 올리면 위치가 나타납니다.
            </p>
          </article>
          <article className="pl-3 pr-1">
            <h6 className="font-bold pb-2">02 SUB PAGE</h6>
            <p className="leading-relaxed">
              그랑핸드의 제품 리스트 페이지입니다.
              <br />
              Perfume 메뉴를 통해 이동 가능하며 제품들을 세 열로 정렬하고
              제품명, 가격, 용량을 표시하였습니다.
            </p>
          </article>
          <article className="pl-3 pr-1">
            <h6 className="font-bold pb-2">03 DETAIL PAGE</h6>
            <p className="leading-relaxed">
              그랑핸드의 제품 상세 페이지입니다.
              <br />
              Susie Salmaon 제품 클릭으로 이동 가능하며 대표 이미지 두 개와 향에
              맞는 사진을 상단에 배치하였습니다. 하단에서 제품의 상세 정보를
              확인 할 수 있습니다.
            </p>
          </article>
          <article className="pl-3 pr-1">
            <h6 className="font-bold pb-2">04 LOGIN PAGE</h6>
            <p className="leading-relaxed">
              그랑핸드의 로그인 페이지입니다.
              <br />
              밋밋해 보일 수 있는 화면에 긴 배너 이미지를 넣어주었고, 소셜
              로그인 버튼을 추가하였습니다.
            </p>
          </article>
        </section>
        <section className="grid grid-cols-4 gap-2">
          <Image
            src="/images/web/granhand_main.png"
            alt="그랑핸드 메인 페이지"
            width={400}
            height={800}
          />
          <Image
            src="/images/web/granhand_sub.png"
            alt="그랑핸드 서브 페이지"
            width={400}
            height={800}
          />
          <Image
            src="/images/web/granhand_detail.png"
            alt="그랑핸드 제품 상세 페이지"
            width={400}
            height={800}
          />
          <Image
            src="/images/web/granhand_login.png"
            alt="그랑핸드 로그인 페이지"
            width={400}
            height={800}
          />
        </section>
      </section>
      <section>
        <div className="pb-14 grid grid-cols-6 place-items-end">
          <Image
            src="/images/web/mori_ipad.png"
            alt="모리 아이패드 목업"
            width={400}
            height={400}
            className="col-span-2"
          />
          <Image
            src="/images/web/mori_imac.png"
            alt="모리 아이맥 목업"
            width={800}
            height={400}
            className="col-span-3"
          />
          <Image
            src="/images/web/mori_iphone.png"
            alt="모리 아이폰 목업"
            width={200}
            height={400}
            className="col-span-1"
          />
        </div>
        <div className="pb-40 flex flex-col items-center">
          <h6 className="font-bold pb-2">
            HTML | CSS | jQuery 를 활용한 모리의 홈페이지 디자인 및 구성
          </h6>
          <div className="flex gap-4 underline underline-offset-1">
            <Link
              href="http://kms2hn.dothome.co.kr/mori/mori.html"
              target="_blank"
            >
              link
            </Link>
            <Link href="https://github.com/aotoyae/mori" target="_blank">
              github
            </Link>
          </div>
        </div>
        <section className="pb-10 grid grid-cols-4 gap-2">
          <article className="pl-3 pr-1">
            <h6 className="font-bold pb-2">01 FIXED LAYOUT-DESKTOP/TABLET</h6>
            <p className="leading-relaxed">
              모리의 데스크탑/태블릿 레이아웃입니다.
              <br />
              메뉴와 상하단을 고정시켜 단순하고 정렬된 느낌을 강조하였습니다.
            </p>
          </article>
          <article className="pl-3 pr-1">
            <h6 className="font-bold pb-2">02 MAIN PAGE</h6>
            <p className="leading-relaxed">
              모리의 메인 페이지입니다.
              <br />
              전시 배너와 새 제품, 브랜드별 카테고리, 인스타그램 이미지를 살펴볼
              수 있습니다.
            </p>
          </article>
          <article className="pl-3 pr-1">
            <h6 className="font-bold pb-2">03 PRODUCT PAGE</h6>
            <p className="leading-relaxed">
              모리의 제품 페이지입니다.
              <br />
              카테고리 클릭 시 컬러가 바뀌며, 제품 이미지들을 확인할 수
              있습니다.
            </p>
          </article>
          <article className="pl-3 pr-1">
            <h6 className="font-bold pb-2">04 EXPOSITION PAGE</h6>
            <p className="leading-relaxed">
              모리의 전시 안내 페이지입니다.
              <br />
              좌측의 전시 포스터와 우측 안내문을 살펴볼 수 있습니다.
            </p>
          </article>
        </section>
        <section className="pb-24 grid grid-cols-4 gap-2">
          <div>
            <Image
              src="/images/web/mori_web_lighting_1.png"
              alt="모리 데스크탑/테블릿 레이아웃"
              width={600}
              height={400}
            />
            <Image
              src="/images/web/mori_web_lighting_2.png"
              alt="모리 데스크탑/테블릿 레이아웃"
              width={600}
              height={400}
            />
          </div>
          <Image
            src="/images/web/mori_web_all.png"
            alt="모리 웹 메인 페이지"
            width={600}
            height={800}
          />
          <Image
            src="/images/web/mori_web_table.png"
            alt="모리 제품 페이지"
            width={600}
            height={800}
          />
          <Image
            src="/images/web/mori_web_exposition.png"
            alt="모리 메인 전시 안내 페이지"
            width={600}
            height={800}
          />
        </section>
        <section className="pb-10 grid grid-cols-4 gap-2">
          <article className="pl-3 pr-1">
            <h6 className="font-bold pb-2">05 FIXED LAYOUT-MOBILE</h6>
            <p className="leading-relaxed">
              모리의 모바일 레이아웃입니다.
              <br />
              메뉴와 상하단을 고정시켜 단순하고 정렬된 느낌을 강조하였습니다.
            </p>
          </article>
          <article className="pl-3 pr-1 col-span-2">
            <h6 className="font-bold pb-2">06 VERTICAL LAYOUT</h6>
            <p className="leading-relaxed">
              사용자가 모바일 환경에서 편리하게 제품을 구경할 수 있도록
              <br />
              세로형 레이아웃으로 구성하였습니다.
            </p>
          </article>
          <article className="pl-3 pr-1">
            <h6 className="font-bold pb-2">07 MENU LAYOUT</h6>
            <p className="leading-relaxed">
              모리의 메뉴 레이아웃입니다.
              <br />
              Menu 버튼 클릭 시 표시되며 카테고리를 선택하면 메뉴가 사라지고
              원하는 페이지로 이동합니다.
            </p>
          </article>
        </section>
        <section className="grid grid-cols-4">
          <Image
            src="/images/web/mori_mobile_chair.png"
            alt="모리 모바일 레이아웃"
            width={400}
            height={800}
          />
          <Image
            src="/images/web/mori_mobile_home.png"
            alt="모리 모바일 메인 페이지"
            width={400}
            height={800}
          />
          <Image
            src="/images/web/mori_mobile_exposition.png"
            alt="모리 모바일 전시 안내 페이지"
            width={400}
            height={800}
          />
          <Image
            src="/images/web/mori_mobile_menu.png"
            alt="모리 모바일 메뉴"
            width={400}
            height={800}
          />
        </section>
      </section>
      <section className="flex flex-col items-center gap-40">
        <h6 className="font-bold">lab</h6>
        <section className="w-1/2 flex flex-col gap-40">
          <Image
            src="/images/web/eyes.gif"
            alt="커서를 따라다니는 눈 이미지"
            width={600}
            height={600}
          />
          <Image
            src="/images/web/text.gif"
            alt="커서에 따라 색이 변하는 텍스트 이미지"
            width={600}
            height={600}
          />
          <Image
            src="/images/web/star.gif"
            alt="커서를 따라다니는 별 이미지"
            width={600}
            height={1200}
          />
          <Image
            src="/images/web/tacoya.gif"
            alt="카테고리에 따라 변경되는 사진들"
            width={600}
            height={1200}
          />
        </section>
        <video width={800} controls>
          <source src="/videos/x_mas.mp4" />
        </video>
      </section>
    </main>
  );
};

export default Web;
