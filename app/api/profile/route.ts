import { cookies, headers } from "next/headers";

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

  //1-Retrive Cookie 
  const getCookie = request.headers.get("cookie");
  console.log(getCookie)

  //2-Retrive cookie
  const cookieStore= await cookies();
  //Retrive
  console.log(cookieStore.get('token')?.value)
  console.log(cookieStore.get('theme')?.value)
  //Set cookie
  cookieStore.set('theme','dark')
  //for delete 
  // cookieStore.delete('theme')


  return Response.json({
    message: "Fetched Headers",
    userAgent,
    authorization,
    token,
  },
  //Set the new header
  {
    headers: {
    Authorization: "Bearer 1324",
    "Set-Cookie": "token=11223344; Path=/; HttpOnly; SameSite=Strict",
    }
  }
 );
}