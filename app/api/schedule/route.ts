import { NextResponse } from "next/server";

const SCHEDULE_URL = "https://opensheet.elk.sh/1tyow1elBi8Jw_NiDDqaHxXIhnBKPQ0z0zJDFXM8N-hA/sheet1"

export async function GET() {
    const response = await fetch(SCHEDULE_URL);
    const data = await response.json();
    return NextResponse.json(data);
}