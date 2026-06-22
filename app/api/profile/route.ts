import { headers } from "next/headers";

export async function GET(request: Request) {
  // Option A: From Request
  const userAgent = request.headers.get("user-agent");
  const authorization = request.headers.get("authorization");

  console.log(userAgent);
  console.log(authorization);

  // Option B: From next/headers
  const headersList = await headers();
  const token = headersList.get("authorization");

  console.log(token);

  return Response.json({
    message: "Fetched Headers",
    userAgent,
    authorization,
    token,
  });
}