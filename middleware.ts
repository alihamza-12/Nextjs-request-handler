import { redirect } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export  function middleware(request:NextRequest){

    console.log("👉 MIDDLEWARE IS RUNNING ON PATH:", request.nextUrl.pathname);
    // return NextResponse.redirect(new URL('/',request.url))
    if(request.nextUrl.pathname==='/api/profile'){
       return NextResponse.redirect(new URL('/',request.url))
    }
}

// export const config = {
//     // The :path* syntax catches /api/profile, /api/profile/, and /api/profile/anything
//     matcher: '/api/profile/:path*', 
// }