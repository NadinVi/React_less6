import JsonPlaseholderAPI from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI"

export const userDetailsLoader = async ({ params: { userId }, request: { signal } }) => {
    //console.log(params)
    return await JsonPlaseholderAPI.getUser({ signal, userId })
}