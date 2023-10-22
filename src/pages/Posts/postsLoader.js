import JsonPlaseholderAPI from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI"

export const postsLoader = async ({ request: { signal } }) => {

  return await JsonPlaseholderAPI.getPosts({ signal })
}
