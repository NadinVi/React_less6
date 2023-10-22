import { redirect } from "react-router-dom"
import JsonPlaseholderAPI from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI"

export const destroyUserAction = async ({ params: { userId }, request: { signal } }) => {

  await JsonPlaseholderAPI.deleteUser({ signal, userId });

  return redirect('/users')
}
