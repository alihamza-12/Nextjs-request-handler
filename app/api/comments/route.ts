import { comments } from "./data";

export async function GET() {
    return Response.json(comments)
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