import {
  Bath,
  BedDouble,
  CalendarCheck,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import ReservationForm from "./components/ReservationForm";

const address = "울산 남구 달삼로 47 3층";
const phoneNumber = "052-227-6476";
const phoneHref = process.env.NEXT_PUBLIC_PHONE || "tel:0522276476";
const kakaoHref = process.env.NEXT_PUBLIC_KAKAO_URL || "https://pf.kakao.com";

const programs = [
  { time: "50분", price: "60,000원", desc: "짧고 집중도 높은 컨디션 케어" },
  { time: "80분", price: "100,000원", desc: "아로마와 스포츠 밸런스 추천 코스" },
  { time: "120분", price: "150,000원", desc: "충분한 휴식과 깊은 이완을 위한 프리미엄 코스" }
];

const features = [
  { icon: ShieldCheck, title: "건전 마사지샵", text: "신뢰를 우선으로 하는 예약제 운영" },
  { icon: Sparkles, title: "고급 인테리어", text: "차분한 블랙 앤 골드 무드의 힐링 공간" },
  { icon: Bath, title: "샤워 가능", text: "방문 전후 편안하게 정돈 가능한 시설" },
  { icon: BedDouble, title: "수면 가능", text: "프라이빗하게 쉬어갈 수 있는 여유" }
];

const guide = ["100% 예약제", "건전 마사지샵", "샤워 가능", "수면 가능", "편안한 휴식 공간 제공"];

export default function Home() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "짱아로마",
    description: "울산 남구 프리미엄 아로마 & 스포츠 마사지샵",
    address: {
      "@type": "PostalAddress",
      streetAddress: "달삼로 47 3층",
      addressLocality: "남구",
      addressRegion: "울산",
      addressCountry: "KR"
    },
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://jjanga-aroma.vercel.app",
    telephone: phoneNumber,
    priceRange: "60000-150000 KRW"
  };

  return (
    <main className="bg-[#050505] text-[#f8f3e7]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="absolute left-0 right-0 top-0 z-20 border-b border-white/10 bg-black/35 backdrop-blur">
        <nav className="section-wrap flex min-h-16 items-center justify-between gap-4">
          <a href="#" className="text-lg font-semibold tracking-wide text-[#f3d891]">
            짱아로마
          </a>
          <div className="hidden items-center gap-6 text-sm text-[#d8cda9] md:flex">
            <a href="#about" className="hover:text-[#f3d891]">소개</a>
            <a href="#programs" className="hover:text-[#f3d891]">프로그램</a>
            <a href="#reservation" className="hover:text-[#f3d891]">예약문의</a>
            <a href="#location" className="hover:text-[#f3d891]">오시는 길</a>
          </div>
          <a
            href="#reservation"
            className="inline-flex items-center gap-2 rounded bg-[#d6ad5b] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#f3d891]"
          >
            <CalendarCheck className="h-4 w-4" />
            예약하기
          </a>
        </nav>
      </header>

      <section className="relative flex min-h-[92vh] items-end overflow-hidden pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-spa.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.66),rgba(0,0,0,0.22)),linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.85))]" />
        <div className="section-wrap relative z-10 grid gap-10 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-[#d6ad5b]/50 px-4 py-2 text-sm text-[#f3d891]">
              100% 예약제 운영
            </p>
            <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              짱아로마
            </h1>
            <p className="mt-5 text-2xl font-medium text-[#f3d891] sm:text-3xl">
              프리미엄 아로마 & 스포츠 마사지
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#e4dcc4] sm:text-lg">
              건전 마사지샵으로 운영되는 프라이빗 힐링 공간입니다. 편안한 휴식과 깊은 이완을 위해 예약부터 이용까지 차분하고 세심하게 안내합니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#reservation"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[#d6ad5b] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#f3d891]"
              >
                <CalendarCheck className="h-4 w-4" />
                예약하기
              </a>
              <a
                href={kakaoHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-[#d6ad5b]/60 px-6 py-3 text-sm font-semibold text-[#f3d891] transition hover:bg-[#d6ad5b]/10"
              >
                <MessageCircle className="h-4 w-4" />
                문의하기
              </a>
            </div>
          </div>
          <div className="rounded border border-white/10 bg-black/45 p-5 backdrop-blur">
            <p className="text-sm font-semibold text-[#d6ad5b]">SITE MENU</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">둘러보기</h2>
            <p className="mt-3 text-sm leading-6 text-[#d8cda9]">
              원하는 정보를 빠르게 확인해보세요.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                { label: "매장 소개", href: "#about" },
                { label: "프로그램 및 가격", href: "#programs" },
                { label: "아로마 마사지와 스포츠 마사지", href: "#massage-type" },
                { label: "관리룸 안내", href: "#room" },
                { label: "이용 안내", href: "#guide" },
                { label: "예약 문의", href: "#reservation" },
                { label: "오시는 길", href: "#location" }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between gap-3 rounded border border-white/10 bg-black/30 px-4 py-3 text-sm text-[#eee3c8] transition hover:border-[#d6ad5b]/60 hover:bg-[#d6ad5b]/10 hover:text-[#f3d891]"
                >
                  <span>{item.label}</span>
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#d6ad5b]" />
                </a>
              ))}
            </div>

            <a
              href={phoneHref}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded bg-[#d6ad5b] px-4 py-3 text-sm font-semibold text-black transition hover:bg-[#f3d891]"
            >
              <Phone className="h-4 w-4" />
              전화 문의 {phoneNumber}
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 bg-[#0a0a0a] py-20">
        <div className="section-wrap grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold text-[#d6ad5b]">ABOUT</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">매장 소개</h2>
            <p className="mt-5 leading-8 text-[#d8cda9]">
              짱아로마는 울산 남구 달삼로 47 3층에 위치한 예약제 마사지 공간입니다.
              프라이빗한 환경, 고급스러운 실내 분위기, 아로마와 스포츠 마사지 프로그램으로 편안한 회복 시간을 제공합니다.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-[#f3d891]">
              <MapPin className="h-5 w-5" />
              {address}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className="rounded border border-white/10 bg-[#111111] p-6">
                <feature.icon className="h-7 w-7 text-[#d6ad5b]" />
                <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 leading-7 text-[#cfc4a8]">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="py-20">
        <div className="section-wrap">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#d6ad5b]">PROGRAM</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">프로그램 및 가격</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.time}
                className="rounded border border-[#d6ad5b]/30 bg-[linear-gradient(180deg,#15120d,#0b0b0b)] p-7 shadow-2xl shadow-black/30"
              >
                <p className="text-lg text-[#f3d891]">{program.time}</p>
                <h3 className="mt-4 text-3xl font-semibold text-white">{program.price}</h3>
                <p className="mt-4 min-h-14 leading-7 text-[#cfc4a8]">{program.desc}</p>
                <a
                  href="#reservation"
                  className="mt-7 inline-flex w-full items-center justify-center rounded border border-[#d6ad5b]/60 px-4 py-3 text-sm font-semibold text-[#f3d891] transition hover:bg-[#d6ad5b] hover:text-black"
                >
                  선택하기
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section id="massage-type" className="border-y border-white/10 bg-[#0a0a0a] py-20">
        <div className="section-wrap">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#d6ad5b]">MASSAGE TYPE</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              아로마 마사지와 스포츠 마사지
            </h2>
            <p className="mt-5 leading-8 text-[#d8cda9]">
              고객님의 컨디션과 원하는 관리 목적에 맞춰 아로마 마사지와 스포츠 마사지를 선택하실 수 있습니다.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded border border-[#d6ad5b]/25 bg-[#111111] p-6">
              <h3 className="text-xl font-semibold text-[#f3d891]">아로마 마사지</h3>
              <p className="mt-3 leading-7 text-[#cfc4a8]">
                은은한 향과 부드러운 오일 테라피로 몸과 마음의 긴장을 편안하게 풀어주는 관리입니다.
                스트레스 완화와 깊은 휴식을 원하는 분께 추천드립니다.
              </p>
            </article>

            <article className="rounded border border-[#d6ad5b]/25 bg-[#111111] p-6">
              <h3 className="text-xl font-semibold text-[#f3d891]">스포츠 마사지</h3>
              <p className="mt-3 leading-7 text-[#cfc4a8]">
                뭉친 근육과 피로한 부위를 집중적으로 풀어주는 관리입니다.
                운동 후 회복과 근육 피로 완화를 원하는 분께 적합합니다.
              </p>
            </article>
          </div>

          <p className="mt-6 rounded bg-black/30 p-5 leading-7 text-[#eee3c8]">
            아로마는 <strong className="text-[#f3d891]">휴식과 힐링 중심</strong>,
            스포츠는 <strong className="text-[#f3d891]">근육 관리와 피로 회복 중심</strong>입니다.
            컨디션과 원하는 관리 목적에 맞춰 선택해보세요.
          </p>
        </div>
      </section>

      <section id="room" className="border-y border-white/10 bg-[#0f0d09] py-20">
        <div className="section-wrap">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#d6ad5b]">ROOM</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              관리룸 안내
            </h2>
            <p className="mt-5 leading-8 text-[#d8cda9]">
              저희 매장은 총 <strong className="text-[#f3d891]">8개의 관리룸</strong>을 운영하고 있습니다.
              혼자 오시는 고객님부터 커플, 친구, 가족까지 편안하게 이용하실 수 있습니다.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded border border-white/10 bg-[#111111] p-6">
              <h3 className="text-xl font-semibold text-white">일반 1인실 6개</h3>
              <p className="mt-3 leading-7 text-[#cfc4a8]">
                혼자 편안하게 관리받을 수 있는 개인룸입니다.
                베드형 5개, 바닥형 1개로 구성되어 있습니다.
              </p>
            </article>

            <article className="rounded border border-white/10 bg-[#111111] p-6">
              <h3 className="text-xl font-semibold text-white">커플룸 1개</h3>
              <p className="mt-3 leading-7 text-[#cfc4a8]">
                커플, 친구, 가족이 함께 이용 가능한 2인실입니다.
              </p>
            </article>

            <article className="rounded border border-white/10 bg-[#111111] p-6">
              <h3 className="text-xl font-semibold text-white">황제룸 1개</h3>
              <p className="mt-3 leading-7 text-[#cfc4a8]">
                일반 1인실보다 넓고 여유로운 프리미엄 1인실입니다.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="guide" className="border-y border-white/10 bg-[#0f0d09] py-16">
        <div className="section-wrap">
          <p className="text-sm font-semibold text-[#d6ad5b]">GUIDE</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">이용 안내</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {guide.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded border border-white/10 bg-black/30 px-4 py-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#d6ad5b]" />
                <span className="text-sm text-[#eee3c8]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reservation" className="py-20">
        <div className="section-wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-[#d6ad5b]">RESERVATION</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">예약 문의</h2>
            <p className="mt-5 leading-8 text-[#d8cda9]">
              예약 문의를 남겨주시면 확인 후 안내드립니다. 전화 문의는 052-227-6476으로 가능합니다. 운영 방식은 100% 예약제입니다.
            </p>
          </div>
          <div className="rounded border border-white/10 bg-[#101010] p-5 sm:p-8">
            <ReservationForm />
          </div>
        </div>
      </section>

      <section id="location" className="border-y border-white/10 bg-[#0a0a0a] py-20">
        <div className="section-wrap grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold text-[#d6ad5b]">LOCATION</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">오시는 길</h2>
            <p className="mt-5 flex items-start gap-2 leading-8 text-[#d8cda9]">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#d6ad5b]" />
              {address}
            </p>
          </div>
          <div className="overflow-hidden rounded border border-[#d6ad5b]/25 bg-[#111]">
            <iframe
              title="짱아로마 Google Maps"
              src={mapSrc}
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <footer className="bg-black py-10">
        <div className="section-wrap flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-semibold text-[#f3d891]">짱아로마</p>
            <p className="mt-2 text-sm leading-7 text-[#cfc4a8]">
              {address}
              <br />
              전화번호 {phoneNumber}
              <br />
              예약제 운영
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={phoneHref}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded bg-[#d6ad5b] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#f3d891]"
            >
              <Phone className="h-4 w-4" />
              {phoneNumber}
            </a>
            <a
              href={kakaoHref}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded border border-[#d6ad5b]/60 px-5 py-3 text-sm font-semibold text-[#f3d891] transition hover:bg-[#d6ad5b]/10"
            >
              <MessageCircle className="h-4 w-4" />
              카카오톡 문의
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
