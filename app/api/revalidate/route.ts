import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-secret");
  const expectedSecret = process.env.HYGRAPH_REVALIDATE_SECRET;

  if (!expectedSecret) {
    return NextResponse.json(
      { message: "HYGRAPH_REVALIDATE_SECRET nao configurado." },
      { status: 500 }
    );
  }

  if (secret !== expectedSecret) {
    return NextResponse.json(
      { message: "Secret invalido." },
      { status: 401 }
    );
  }

  revalidateTag("hygraph");

  return NextResponse.json({
    revalidated: true,
    now: Date.now()
  });
}
