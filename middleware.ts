import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request:NextRequest){
    //Response send back to server
    const response= NextResponse.next()
    // console.log("👉 MIDDLEWARE IS RUNNING ON PATH:", request.nextUrl.pathname);
    // return NextResponse.redirect(new URL('/',request.url))
    if(request.nextUrl.pathname==='/api/profile'){
       return NextResponse.redirect(new URL('/',request.url))
    }
    //Getting Cookie and set again
     //2-Retrive cookie
    const cookieStore= await cookies();
    //Retrive
    console.log(cookieStore.get('token')?.value)
    console.log(cookieStore.get('theme')?.value)
    //Set cookie
    cookieStore.set('theme','light')
    //Set headers for adition information
    response.headers.set('custome-header' , 'custom-value')
    return response
}

// export const config = {
//     // The :path* syntax catches /api/profile, /api/profile/, and /api/profile/anything
//     matcher: '/api/profile/:path*', 
// }