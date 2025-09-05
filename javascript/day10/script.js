// let data=true
// function order(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(!data){
//                 resolve("your order is ready")
//             }   
//             else{
//                 reject("your order is cancel")
//             }
//         }, 10000);
//     })
// }


// order()
// .then((msg)=>{
// console.log(msg)
// })
// .catch ((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("thanks for your order")
// })




// let value=0
// function data(){
//    setTimeout(()=>{
//     value=5000
//     },5000)
// }

// data()

// console.log(value)






// fetch('https://fakestoreapi.com/products')
// .then((res)=>{
//     if(!res.ok){
//         throw new Error("data not found"); 
//     }
// return res.json()

// })

// .then((data)=>{
// console.log(data[0])

// // data.map((value)=>{
// // console.log(value.title,value.price)
// // })
// })

// .catch((err)=>{
// console.log(err)
// })


async function apicall(){
    try{
    let response=await fetch('https://fakestoreapi.com/products')

    if(!response.ok){
        throw new Error("data not found");        
    }

    let data=await response.json();

    console.log(data)
    }catch(err){
        console.log(err)
    }
}


apicall()

