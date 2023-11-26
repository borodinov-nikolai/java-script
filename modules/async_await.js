




const response = ()=> {
    return new Promise(resolve => setTimeout(()=>resolve('response'), 4000))
}



const result = await response()





export default response;