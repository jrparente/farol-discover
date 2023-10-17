import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const apiKey = process.env.SENDGRID_API_KEY;

    if (!apiKey) {
      console.error("SendGrid API Key not found");
      return new NextResponse("Server error", { status: 500 });
    }

    sgMail.setApiKey(apiKey);

    const emailContent = `
      <strong>Name:</strong> ${formData.first_name} ${formData.last_name}<br>
      <strong>Email:</strong> ${formData.email}<br>
      <strong>Phone:</strong> ${formData.phone}<br>
      <strong>Message:</strong> ${formData.message}
    `;

    const msg = {
      to: "info@faroldiscover.pt",
      from: formData.email,
      subject: "New Contact Form Submission",
      html: emailContent,
    };

    sgMail.send(msg);
    return new NextResponse("Form submitted successfully!", { status: 200 });
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return new NextResponse("Error in parsing the request", { status: 400 });
  }
}
