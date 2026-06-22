import { NextRequest } from "next/server";
import { comments } from "./data";
//GET URL Query Parameter
export async function GET(request : NextRequest) {
    
    const searchparams=request.nextUrl.searchParams
    const query= searchparams.get('query');
    console.log(query)
    const filteredComments=query?comments.filter((comment)=>
        comment.comment.toLowerCase().includes(query.toLowerCase())):comments
    if (filteredComments.length===0) {
     return Response.json(
       { message: "Comment not found"},
       { status: 404 }
     )    
   }


     return Response.json({
    message: "Fetched comment",
    filteredComments
    });
}


export async function POST(request:Request){
    const {user ,comment} =await request.json();

    if (!user || !comment) {
    return Response.json(
      { error: "user and comment are required" },
      { status: 400 }
    );
  }

    const newComment={
        id:comments.length + 1,
        user ,
        comment ,
        createdAt : new Date(),
    }
    
    comments.push(newComment);

    return Response.json(newComment,{
        // headers:{'Content-Type':'application/json'},
        status:201,
    })
}