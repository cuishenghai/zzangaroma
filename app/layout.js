import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jjanga-aroma.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "짱아로마 | 울산 남구 프리미엄 아로마 & 스포츠 마사지",
    template: "%s | 짱아로마"
  },
  description:
    "울산 남구 달삼로 47 3층에 위치한 짱아로마 공식 홈페이지입니다. 100% 예약제로 운영되는 건전 프리미엄 아로마 & 스포츠 마사지샵입니다.",
  keywords: [
    "짱아로마",
    "울산 마사지",
    "울산 남구 마사지",
    "달삼로 마사지",
    "아로마 마사지",
    "스포츠 마사지",
    "건전 마사지샵",
    "프리미엄 마사지"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "짱아로마",
    title: "짱아로마 | 프리미엄 아로마 & 스포츠 마사지",
    description:
      "울산 남구 달삼로 47 3층, 100% 예약제 프리미엄 힐링 공간. 아로마 마사지와 스포츠 마사지를 편안하게 이용하세요.",
    images: [
      {
        url: "/images/hero-spa.png",
        width: 1200,
        height: 630,
        alt: "짱아로마 프리미엄 마사지 공간"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "짱아로마 | 프리미엄 아로마 & 스포츠 마사지",
    description: "울산 남구 100% 예약제 프리미엄 아로마 & 스포츠 마사지샵",
    images: ["/images/hero-spa.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
