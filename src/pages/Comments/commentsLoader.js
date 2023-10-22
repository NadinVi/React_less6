import JsonPlaseholderAPI from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI"

export const commentsLoader = async ({ request: { signal } }) => {

  return await JsonPlaseholderAPI.getComments({ signal })
}