import { redirect } from 'react-router-dom'
import JsonPlaseholderAPI from '../../api/JsonPlaseholderAPI/JsonPlaseholderAPI'

export async function editPostAction({ request, params }) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)

  await JsonPlaseholderAPI.updatePost({ signal: request.signal, postId: params.postId, updates })

  return redirect(`/posts/${params.postId}`)
}
