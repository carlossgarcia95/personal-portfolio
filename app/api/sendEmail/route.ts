import { ContactFormSchema } from "@/lib/validationSchemas";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validation = ContactFormSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  console.log("email:" + body.email, "message" + body.message);

  return NextResponse.json({ status: 200 });
}
