import JsonPlaseholderAPI from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI"

export const usersLoader = async ({ request: { signal } }) => {

  return await JsonPlaseholderAPI.getUsers({ signal })
}