import { NextResponse } from "next/server";

export async function GET() {
  // Demo API removed during reset — return 404
  return NextResponse.json({ message: "Not Found" }, { status: 404 });
}

export async function POST() {
  return NextResponse.json({ message: "Not Found" }, { status: 404 });
}
