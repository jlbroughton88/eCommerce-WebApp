import axios from "axios";

export const getActiveListings = async ( serverUrl, dbUser, limited ) => {
    return (
        await axios
        .get(`${serverUrl}/api/personallistings/available/${limited}/${dbUser.user_uid}`)
        .catch(err => console.log(err)) 
    )
}

export const getAll = async ( serverUrl, resultNum ) => {
    return (
        await axios 
        .get(`${serverUrl}/api/browse/all/${resultNum}`)
        .catch(err => console.log(err))
    )
}

export const getCategory = async (serverUrl, category, resultNum) => {
    return (
        await axios
        .get(`${serverUrl}/api/browse/${category}/${resultNum}`)
        .catch(err => console.log(err))
    )
}

export const getSaved = async (serverUrl, dbUser, limited) => {
    return (
        await axios
        .get(`${serverUrl}/api/save/get/${limited}/${dbUser.user_uid}`)
        .catch(err => console.log(err))
    )
}

export const getSold = async (serverUrl, dbUser, limited) => {
    return (
        await axios
        .get(`${serverUrl}/api/personallistings/sold/${limited}/${dbUser.user_uid}`)
        .catch(err => console.log(err))
    )
}

export const getSingle = async (serverUrl, listingUid) => {
    return (
        await axios
        .get(`${serverUrl}/api/browse/single/${listingUid}`)
        .catch(err => console.log(err))
    )
}

export const getSearchListings = async (serverUrl, formattedSearch, resultNum) => {
    return (
        await axios
        .get(`${serverUrl}/api/search/${formattedSearch}/${resultNum}`)
        .catch(err => console.log(err))
    )
}

export const getSearchBrowseCount = async (serverUrl, formattedSearch) => {
    return (
        await axios
        .get(`${serverUrl}/api/browsecount/search/${formattedSearch}`)
        .catch(err => console.log(err))
    )
}

export const getCategoryBrowseCount = async (serverUrl, newCategory) => {
    return (
        await axios
        .get(`${serverUrl}/api/browsecount/${newCategory}`)
        .catch((err) => console.log(err))
    )
}

export const handleFormSubmit = async (serverUrl, dbUser, obj) => {
    return (
        await axios
        .post(`${serverUrl}/api/updateprofile/${dbUser.user_uid}`, obj)
        .catch(err => console.log(err))
    )
}

export const handleSellFormText = async (serverUrl, obj) => {
    return (
        await axios
        .post(`${serverUrl}/api/sell/text`, obj)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    )
}  

export const handleSellFormMedia = async (serverUrl, formData, randomNum, config) => {
    return (
        await axios
        .post(`${serverUrl}/api/sell/images/${randomNum}`, formData, config)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    )
}