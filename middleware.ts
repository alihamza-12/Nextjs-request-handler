import { redirect } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export  function middleware(request:NextRequest){
    //Response send back to server
    const response= NextResponse.next()
    console.log("👉 MIDDLEWARE IS RUNNING ON PATH:", request.nextUrl.pathname);
    // return NextResponse.redirect(new URL('/',request.url))
    if(request.nextUrl.pathname==='/api/profile'){
       return NextResponse.redirect(new URL('/',request.url))
    }
    //Set headers for adition information
    response.headers.set('custome-header' , 'custom-value')
    return response
}

// export const config = {
//     // The :path* syntax catches /api/profile, /api/profile/, and /api/profile/anything
//     matcher: '/api/profile/:path*', 
// }