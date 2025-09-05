// function validation(name,email,mobile,password){    
//     // console.log(name,email,password,mobile)
//     let nameRegex=/^[A-Za-z\s]{2,30}$/

//     let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/

//     let mobileRegex=/^[6-9]\d{9}$/

//     let passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

//     if(name==''){
//        alert('name is required')
//     }
//     else if(!nameRegex.test(name)){
//             alert("name is not match")
//     }else{
//         alert('name matched successfully')
//     }
// }

// document.getElementById('forms').addEventListener('submit',(e)=>{
//     e.preventDefault()
//     let name=document.getElementById('name').value
//     let email=document.getElementById('email').value
//     let mobile=document.getElementById('mobile').value
//     let password=document.getElementById('password').value
   

//     let value=validation(name,email,mobile,password)
// })


// setTimeout(() => {
//     console.log('timer function is calling')
// }, 7000);

// function call(){
//     console.log('hello')
// }

// call()

let count=0

let clear=setInterval(() => {
    count++;
    console.log('interval function is calling')

    if(count==5){
        clearInterval(clear)
    }
}, 5000);