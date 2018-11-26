const URL = 'YOUR_POST_URL_HERE'

//STANDARD API ACTION METHOD
export const nameOfYourAPIMethod = (params) =>dispatch=>{

    dispatch({
        type:'ENABLE_LOADER_ACTION'
    })

    fetch(SEARCH_URL+'subURL',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(params)
    })
    .then(res => res.json())
    .then(console.log(res))
    .then(()=>{

        dispatch({
            type:'DISABLE_LOADER_ACTION'
        })
    })
    .catch((err)=>{
        console.log(err)
    })

}
