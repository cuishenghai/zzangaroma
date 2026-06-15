"use client";

import { useState } from "react";
import { CalendarDays, Clock, MessageSquare, Phone, Send, User } from "lucide-react";

const programs = [
  "50분 - 60,000원",
  "80분 - 100,000원",
  "120분 - 150,000원"
];

const initialForm = {
  name: "",
  phone: "",
  date: "",
  time: "",
  program: programs[0],
  message: ""
};

export default function ReservationForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "예약 문의 전송에 실패했습니다.");
      }

      setStatus({ type: "success", message: data.message });
      setForm(initialForm);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldClass =
    "w-full rounded border border-[#3a3327] bg-[#0d0d0d] px-4 py-3 text-sm text-[#f8f3e7] outline-none transition focus:border-[#d6ad5b] focus:ring-2 focus:ring-[#d6ad5b]/20";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-[#d8cda9]">
          이름
          <span className="relative">
            <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d6ad5b]" />
            <input
              className={`${fieldClass} pl-10`}
              name="name"
              value={form.name}
              onChange={updateField}
              required
              autoComplete="name"
            />
          </span>
        </label>
        <label className="grid gap-2 text-sm text-[#d8cda9]">
          연락처
          <span className="relative">
            <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d6ad5b]" />
            <input
              className={`${fieldClass} pl-10`}
              name="phone"
              value={form.phone}
              onChange={updateField}
              required
              inputMode="tel"
              autoComplete="tel"
            />
          </span>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-[#d8cda9]">
          희망 날짜
          <span className="relative">
            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d6ad5b]" />
            <input
              className={`${fieldClass} pl-10`}
              type="date"
              name="date"
              value={form.date}
              onChange={updateField}
              required
            />
          </span>
        </label>
        <label className="grid gap-2 text-sm text-[#d8cda9]">
          희망 시간
          <span className="relative">
            <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d6ad5b]" />
            <input
              className={`${fieldClass} pl-10`}
              type="time"
              name="time"
              value={form.time}
              onChange={updateField}
              required
            />
          </span>
        </label>
      </div>

      <label className="grid gap-2 text-sm text-[#d8cda9]">
        프로그램 선택
        <select className={fieldClass} name="program" value={form.program} onChange={updateField}>
          {programs.map((program) => (
            <option key={program}>{program}</option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm text-[#d8cda9]">
        문의 내용
        <span className="relative">
          <MessageSquare className="pointer-events-none absolute left-3 top-4 h-4 w-4 text-[#d6ad5b]" />
          <textarea
            className={`${fieldClass} min-h-32 resize-y pl-10`}
            name="message"
            value={form.message}
            onChange={updateField}
          />
        </span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[#d6ad5b] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#f3d891] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send className="h-4 w-4" />
        {isSubmitting ? "전송 중" : "예약 문의 전송"}
      </button>

      {status.message ? (
        <p
          className={`rounded border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-[#d6ad5b]/40 bg-[#d6ad5b]/10 text-[#f3d891]"
              : "border-red-400/40 bg-red-500/10 text-red-200"
          }`}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
