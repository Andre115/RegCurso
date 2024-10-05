
const validForm= (data)=>{
    const objDatas= Object.values(data).some(obj=> obj.trim() === '')
    return objDatas;
}


export default validForm;