import JsonPlaseholderAPI from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI"

export const commentDetailsLoader = async ({ params: { commentId }, request: { signal } }) => {
  //console.log(params)
  return await JsonPlaseholderAPI.getComment({ signal, commentId })
}