import JsonPlaseholderAPI from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI"

export const photosLoader = async ({ request: {signal} }) => {
    return await JsonPlaseholderAPI.getPhotos({ signal })
}
