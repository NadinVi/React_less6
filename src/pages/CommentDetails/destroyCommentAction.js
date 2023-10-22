import { redirect } from "react-router-dom"
import JsonPlaseholderAPI from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI"

export const destroyCommentAction = async ({ params: { commentId }, request: { signal } }) => {

  await JsonPlaseholderAPI.deleteComment({ signal, commentId });

  return redirect('/comments')
}