// No caching (always fresh)
// export const dynamic = "force-dynamic";
// -----------------------------------------
// Cache response for 60 seconds
// Same response served to all users
// export const revalidate = 50;

export async function GET(request:Request) {
    const time =new Date().toLocaleTimeString();
    console.log(time)

     return Response.json({
    message: "Fetched time",
    time
    });
}