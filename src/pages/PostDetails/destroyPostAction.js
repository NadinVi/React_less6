import { redirect } from "react-router-dom"
import JsonPlaseholderAPI from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI"

export const destroyPostAction = async ({ params: { postId }, request: { signal } }) => {

  await JsonPlaseholderAPI.deletePost({ signal, postId });

  return redirect('/posts')
}
