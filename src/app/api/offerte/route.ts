import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, city, message, project_type, type } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Naam, email en bericht zijn verplicht." },
        { status: 400 }
      );
    }

    const isQuote = type === "quote";
    const subject = isQuote
      ? `Offerte aanvraag van ${name}`
      : `Contactbericht van ${name}`;

    await resend.emails.send({
      from: "het Tolhek <noreply@hettolhek.nl>",
      to: ["info@hettolhek.nl"],
      replyTo: email,
      subject,
      html: `
        <h2>${subject}</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Naam</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${email}</td></tr>
          ${phone ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Telefoon</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${phone}</td></tr>` : ""}
          ${city ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Woonplaats</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${city}</td></tr>` : ""}
          ${isQuote && project_type ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Type project</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${project_type}</td></tr>` : ""}
        </table>
        <h3 style="margin-top:20px;">${isQuote ? "Omschrijving" : "Bericht"}</h3>
        <p style="white-space:pre-wrap;background:#f5f5f4;padding:16px;border-radius:8px;">${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Er ging iets mis bij het verzenden." },
      { status: 500 }
    );
  }
}
