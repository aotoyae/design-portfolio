import Link from 'next/link';
import Image from 'next/image';
import granhandImac from '@/app/assets/web/granhand_imac.png';
import granhandMain from '@/app/assets/web/granhand_main.png';
import granhandSub from '@/app/assets/web/granhand_sub.png';
import granhandDetail from '@/app/assets/web/granhand_detail.png';
import granhandLogin from '@/app/assets/web/granhand_login.png';
import moriImac from '@/app/assets/web/mori_imac.png';
import moriIpad from '@/app/assets/web/mori_ipad.png';
import moriIphone from '@/app/assets/web/mori_iphone.png';
import moriWebLayout1 from '@/app/assets/web/mori_web_lighting_1.png';
import moriWebLayout2 from '@/app/assets/web/mori_web_lighting_2.png';
import moriWebMain from '@/app/assets/web/mori_web_all.png';
import moriWebProduct from '@/app/assets/web/mori_web_table.png';
import moriWebExposition from '@/app/assets/web/mori_web_exposition.png';
import moriMobileLayout from '@/app/assets/web/mori_mobile_chair.png';
import moriMobileMain from '@/app/assets/web/mori_mobile_home.png';
import moriMobileExposition from '@/app/assets/web/mori_mobile_exposition.png';
import moriMobileMenu from '@/app/assets/web/mori_mobile_menu.png';
import eyes from '@/app/assets/web/eyes.gif';
import text from '@/app/assets/web/text.gif';
import star from '@/app/assets/web/star.gif';
import tacoya from '@/app/assets/web/tacoya.gif';

const Web = () => {
  return (
    <main className="pb-60 flex flex-col items-center gap-32">
      <section>
        <Image src={granhandImac} alt="그랑핸드 아이맥 목업" />
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
              제품들을 세 열로 정렬하고 제품명, 가격, 용량을 표시하였습니다.
            </p>
          </article>
          <article className="pl-3 pr-1">
            <h6 className="font-bold pb-2">03 DETAIL PAGE</h6>
            <p className="leading-relaxed">
              그랑핸드의 제품 상세 페이지입니다.
              <br />
              대표 이미지 두 개와 향에 맞는 사진을 상단에 배치하습니다. 하단에서
              제품의 상세 정보를 확인 할 수 있습니다.
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
          <Image src={granhandMain} alt="그랑핸드 메인 페이지" />
          <Image src={granhandSub} alt="그랑핸드 서브 페이지" />
          <Image src={granhandDetail} alt="그랑핸드 제품 상세 페이지" />
          <Image src={granhandLogin} alt="그랑핸드 로그인 페이지" />
        </section>
      </section>
      <section>
        <div className="pb-14 grid grid-cols-6 place-items-end">
          <Image
            src={moriIpad}
            alt="모리 아이패드 목업"
            className="col-span-2"
          />
          <Image src={moriImac} alt="모리 아이맥 목업" className="col-span-3" />
          <Image
            src={moriIphone}
            alt="모리 아이폰 목업"
            className="col-span-1"
          />
        </div>
        <div className="pb-40 flex flex-col items-center">
          <h6 className="font-bold pb-2">
            HTML | CSS | Jquery 를 활용한 모리의 홈페이지 디자인 및 구성
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
            <Image src={moriWebLayout1} alt="모리 데스크탑/테블릿 레이아웃" />
            <Image src={moriWebLayout2} alt="모리 데스크탑/테블릿 레이아웃" />
          </div>
          <Image src={moriWebMain} alt="모리 웹 메인 페이지" />
          <Image src={moriWebProduct} alt="모리 제품 페이지" />
          <Image src={moriWebExposition} alt="모리 메인 전시 안내 페이지" />
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
          <Image src={moriMobileLayout} alt="모리 모바일 레이아웃" />
          <Image src={moriMobileMain} alt="모리 모바일 메인 페이지" />
          <Image
            src={moriMobileExposition}
            alt="모리 모바일 전시 안내 페이지"
          />
          <Image src={moriMobileMenu} alt="모리 모바일 메뉴" />
        </section>
      </section>
      <section className="flex flex-col items-center gap-40">
        <h6 className="font-bold">lab</h6>
        <section className="w-1/2 flex flex-col gap-40">
          <Image src={eyes} alt="커서를 따라다니는 눈 이미지" />
          <Image src={text} alt="커서에 따라 색이 변하는 텍스트 이미지" />
          <Image src={star} alt="커서를 따라다니는 별 이미지" />
          <Image src={tacoya} alt="카테고리에 따라 변경되는 사진들" />
        </section>
        <video width={800} controls>
          <source src="/videos/x_mas.mp4" />
        </video>
      </section>
    </main>
  );
};

export default Web;
