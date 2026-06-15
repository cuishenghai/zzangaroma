import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const requiredFields = ["name", "phone", "date", "time", "program"];

function isMissing(value) {
  return typeof value !== "string" || value.trim().length === 0;
}

function clean(value) {
  return String(value || "").replace(/[\r\n]+/g, " ").trim().slice(0, 500);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const missing = requiredFields.filter((field) => isMissing(body[field]));

    if (missing.length > 0) {
      return NextResponse.json(
        { message: "필수 항목을 모두 입력해 주세요." },
        { status: 400 }
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!adminEmail || !smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { message: "이메일 발송 환경변수가 설정되지 않았습니다." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const reservation = {
      name: clean(body.name),
      phone: clean(body.phone),
      date: clean(body.date),
      time: clean(body.time),
      program: clean(body.program),
      message: clean(body.message || "-")
    };

    const message = `
새 예약 문의가 접수되었습니다.

이름: ${reservation.name}
연락처: ${reservation.phone}
희망 날짜: ${reservation.date}
희망 시간: ${reservation.time}
프로그램: ${reservation.program}
문의 내용: ${reservation.message}
`.trim();

    await transporter.sendMail({
      from: process.env.SMTP_FROM || smtpUser,
      to: adminEmail,
      subject: `[짱아로마] 예약 문의 - ${reservation.name}`,
      text: message,
      replyTo: adminEmail
    });

    return NextResponse.json({ message: "예약 문의가 접수되었습니다." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "예약 문의 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
