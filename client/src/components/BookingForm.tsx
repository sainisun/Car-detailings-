/*
 * Style reminder: the booking form is a compact workshop intake card—clear fields,
 * generous tap targets, practical language, and WhatsApp as the explicit hand-off.
 */
import { ArrowUpRight, MessageCircle, PhoneCall } from "lucide-react";
import { useState } from "react";
import { bookingMessage, phone, whatsappPhone } from "@/lib/siteData";

const serviceOptions = ["Washing & Cleaning", "Polish & Detailing", "Mechanical Work", "Not sure yet"];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const vehicle = String(data.get("vehicle") || "").trim();
    const service = String(data.get("service") || "").trim();
    const day = String(data.get("day") || "").trim();
    const note = String(data.get("note") || "").trim();
    const message = [
      bookingMessage,
      name && `Name: ${name}`,
      vehicle && `Vehicle: ${vehicle}`,
      service && `Service: ${service}`,
      day && `Preferred day: ${day}`,
      note && `Note: ${note}`,
    ].filter(Boolean).join("\n");
    setSubmitted(true);
    window.open(`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="booking-card">
      <div className="booking-card-head">
        <div><span className="booking-card-kicker"><MessageCircle size={14} /> WhatsApp appointment</span><h3>Tell us what the vehicle needs.</h3></div>
        <span className="booking-card-number">01 / 04</span>
      </div>
      <p className="booking-card-copy">Share a few details and the message will open in WhatsApp for a direct conversation with the workshop.</p>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label><span>Your name</span><input name="name" placeholder="Name" autoComplete="name" required /></label>
        <label><span>Vehicle</span><input name="vehicle" placeholder="Car, SUV, or pickup" required /></label>
        <label><span>Service route</span><select name="service" defaultValue={serviceOptions[0]}>{serviceOptions.map((option) => <option value={option} key={option}>{option}</option>)}</select></label>
        <label><span>Preferred day</span><input name="day" type="date" /></label>
        <label className="booking-form-wide"><span>Anything we should know?</span><textarea name="note" rows={3} placeholder="Tell us about the vehicle or the work you have in mind." /></label>
        <button className="button button--gold booking-submit" type="submit">{submitted ? "Continue in WhatsApp" : "Send enquiry on WhatsApp"} <ArrowUpRight size={16} /></button>
      </form>
      <div className="booking-card-foot"><span>Prefer a call?</span><a href={`tel:${phone}`}><PhoneCall size={14} /> {phone}</a></div>
    </div>
  );
}
