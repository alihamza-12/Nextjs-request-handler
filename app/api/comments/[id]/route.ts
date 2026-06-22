import { comments } from "../data";
//Dynamic Route
export async function GET(_request : Request , { params }: { params: Promise<{ id: string }> } ){
    const {id} =await  params

    const comment = comments.find((comment)=>comment?.id=== parseInt(id));
    if (!comment) {
    return Response.json(
        { message: "Comment not found"},
        { status: 404 }
    )    
  }

  
    return Response.json({
    message: "Fetched comment",
    comment,
    });
  


}