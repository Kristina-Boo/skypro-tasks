const host = 'https://wedev-api.sky.pro/api/v1/:kristina-boo'
export const fetchComments = () => {
    return fetch(host+"/comments").then(res =>{
        return res.json()
    })
    then((data) => {
        console.log(data)
    })
}