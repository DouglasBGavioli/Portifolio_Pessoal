import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const getExpectedSecret = () => process.env.HYGRAPH_REVALIDATE_SECRET;

const isAuthorized = (secret: string | null) => {
  const expectedSecret = getExpectedSecret();

  if (!expectedSecret) {
    return {
      ok: false,
      response: NextResponse.json(
        { message: "HYGRAPH_REVALIDATE_SECRET nao configurado." },
        { status: 500 }
      )
    };
  }

  if (secret !== expectedSecret) {
    return {
      ok: false,
      response: NextResponse.json(
        { message: "Secret invalido." },
        { status: 401 }
      )
    };
  }

  return { ok: true as const };
};

const runRevalidation = () => {
  revalidateTag("hygraph");
  revalidatePath("/");
  revalidatePath("/projects");
};

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const auth = isAuthorized(secret);

  if (!auth.ok) {
    return auth.response;
  }

  runRevalidation();

  return NextResponse.json({
    revalidated: true,
    method: "GET",
    now: Date.now()
  });
}

export async function POST(request: NextRequest) {
  let bodySecret: string | null = null;

  try {
    const body = await request.json();
    bodySecret = typeof body?.secret === "string" ? body.secret : null;
  } catch {
    bodySecret = null;
  }

  const secret =
    request.headers.get("x-revalidate-secret") ??
    request.nextUrl.searchParams.get("secret") ??
    bodySecret;

  const auth = isAuthorized(secret);

  if (!auth.ok) {
    return auth.response;
  }

  runRevalidation();

  return NextResponse.json({
    revalidated: true,
    method: "POST",
    now: Date.now()
  });
}
