import ContactFormEmail from "@/app/components/contact-form-email";
import { ContactFormSchema } from "@/lib/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const resend = new Resend(process.env.RESEND_API_KEY);

  const validation = ContactFormSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "perfonal-portfolio@resend.dev",
      to: "carlosgarcia3995@gmail.com",
      subject: "Message from contact form",
      reply_to: body.email,
      react: React.createElement(ContactFormEmail, {
        message: body.message,
        senderEmail: body.email,
      }),
    });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Sonething went wrong. Email has not been delivered." },
      { status: 400 }
    );
  }

  console.log("email:" + body.email, "message" + body.message);

  return NextResponse.json({ status: 200 });
}
