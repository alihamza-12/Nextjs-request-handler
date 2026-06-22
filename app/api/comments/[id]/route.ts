import { comments } from "../data";
//Dynamic Route
export async function GET(_request : Request , { params }: { params: Promise<{ id: string }> } ){
    const {id} =await  params

    const comment = comments.find((comment)=>comment?.id=== parseInt(id));
    if (!comment) {
        return Response.json(
            { message: "Comment not found"},
            { status: 400 }
         )    
    }
    return Response.json({
    message: "Fetched comment",
    comment,
    });
}

//PATCH request
export async function PATCH(request: Request,{params}:{params : Promise<{id:string}>}){
    const {id}=await params;
    const body= await request.json()
    const {comment}=await body

    if (!comment) {
     return Response.json(
       { message: "Comment not found"},
       { status: 404 }
     )    
   }

    const index= comments.findIndex((comment)=>comment.id===parseInt(id));
    comments[index].comment=comment;


    return Response.json({
    message: "Fetched comment",
    comment:comments[index]
    });
}