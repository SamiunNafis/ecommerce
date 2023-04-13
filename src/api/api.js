import axios from 'axios'

export async function productsData() {
    //const data = await axios.get('https://fakestoreapiserver.reactbd.com/products')
    return axios.get('https://fakestoreapiserver.reactbd.com/products')
    .then(res=>{
        return res.data
    })
    .catch(err=>alert(err))
    //alert(JSON.stringify(data))
    //return {data}
    /*let obj
    const res = fetch('https://fakestoreapiserver.reactbd.com/products')
        .then(res => res.json())
        .then((json) => {
            //alert(json)
           // obj = json
            mf(json)
        })
        /*obj = await res.json()
        alert(obj)*/
}

//https://fakestoreapiserver.reactbd.com/products