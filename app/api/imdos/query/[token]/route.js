import {
  generateServerAuthKey,
  generateServerSignature,
} from "@/lib/utils/server";
import { encryptJSON } from "@/lib/imdos/encryption";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { token, params } = await request.json();

    const apiRequest = await fetch(process.env.API_ENDPOINT + "main.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-TOKEN": await generateServerSignature(),
        "X-AUTH-KEY": await generateServerAuthKey(),
      },
      body: JSON.stringify({
        query: atob(token),
        params: params,
      }),
    });

    const response = await apiRequest.json();

    if (!apiRequest.ok) {
      throw new Error(response.message);
    }

    return NextResponse.json({ data: encryptJSON(response) }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: true, message: error?.message },
      { status: 400 }
    );
  }
}

export const revalidate = 0;
