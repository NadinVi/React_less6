import { redirect } from 'react-router-dom'
import JsonPlaseholderAPI from '../../api/JsonPlaseholderAPI/JsonPlaseholderAPI'

export async function editUserAction({ request, params }) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)

  await JsonPlaseholderAPI.updateUser({ signal: request.signal, userId: params.userId, updates })

  return redirect(`/users/${params.userId}`)
}
