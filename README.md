# 짱아로마 공식 홈페이지

Next.js App Router, React, Tailwind CSS 기반의 프리미엄 마사지샵 홈페이지입니다.

## 폴더 구조

```text
jjanga-aroma/
  app/
    api/reservation/route.js
    components/ReservationForm.jsx
    globals.css
    layout.js
    page.js
    robots.js
    sitemap.js
  public/
    images/hero-spa.png
  .env.example
  vercel.json
  next.config.mjs
  package.json
  postcss.config.mjs
```

## 로컬 실행

```bash
npm install
npm run dev
```

## 환경변수

`.env.example`을 참고해 Vercel Project Settings의 Environment Variables에 동일하게 등록하세요.

예약 문의 이메일 전송에는 `ADMIN_EMAIL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`가 필요합니다.

## 배포

Vercel에서 이 폴더를 프로젝트로 연결한 뒤 환경변수를 설정하고 배포하면 됩니다.
