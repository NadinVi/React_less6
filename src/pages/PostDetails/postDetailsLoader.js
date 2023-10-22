import JsonPlaseholderAPI from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI"

export const postDetailsLoader = async ({ params: { postId }, request: { signal } }) => {

  return await JsonPlaseholderAPI.getPost({ signal, postId })
}
