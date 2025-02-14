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

const Web = () => {
  return (
    <main className="pb-60 flex flex-col items-center">
      <section className="pb-32">
        <Image src={granhandImac} alt="그랑핸드 아이맥 목업" />
        <div className="pb-60 flex flex-col items-center">
          <h6 className="font-bold pb-2">
            HTML| CSS 를 활용한 그랑핸드 홈페이지 디자인 및 구성
          </h6>
          <div className="flex gap-4 underline underline-offset-1">
            <Link href="http://kms2hn.dothome.co.kr/GRANHAND/main.html">
              link
            </Link>
            <Link href="https://github.com/aotoyae/granhand">github</Link>
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
            <Link href="http://kms2hn.dothome.co.kr/mori/mori.html">link</Link>
            <Link href="https://github.com/aotoyae/mori">github</Link>
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
          <div>
            <Image src={moriWebLayout1} alt="모리 데스크탑/테블릿 레이아웃" />
            <Image src={moriWebLayout2} alt="모리 데스크탑/테블릿 레이아웃" />
          </div>
          <Image src={moriWebMain} alt="모리 웹 메인 페이지" />
          <Image src={moriWebProduct} alt="모리 메인 제품 페이지" />
          <Image src={moriWebExposition} alt="모리 메인 전시 안내 페이지" />
        </section>
      </section>
    </main>
  );
};

export default Web;
