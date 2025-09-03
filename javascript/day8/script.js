// let head=document.getElementById('head');
// head.style.backgroundColor='red'
// head.style.color='white'
// head.style.padding='40px'
// head.style.margin='80px'

// let myDiv=document.createElement('div')
// myDiv.id='container'
// myDiv.className='classcon'
// myDiv.textContent='this is my container'
// myDiv.style.color='yellow'
// myDiv.style.margin='100px'
// myDiv.classList.add('mydiv')
// myDiv.classList.remove('mydiv')
// document.body.appendChild(myDiv)



// function clicking() {
//     console.log("function is calling ")

//     let head= document.createElement('div')
//     head.textContent='hello i am div'
//     document.body.appendChild(head)
// }

// document.getElementById('btn').addEventListener('keypress',(event)=>{
//     console.log("function is calling",event);
//     let head= document.createElement('div')
//     head.textContent=event.key
//     document.body.appendChild(head)
// })

// let btn=document.getElementById('btn')

// btn.addEventListener('mouseenter',()=>{
//    let a=document.createElement('p')
//    a.textContent="mouseEntered"
//    document.body.appendChild(a)
// })

let button=document.getElementById('btn')

button.addEventListener('click',()=>{
    let data=document.getElementById('inputs').value

    console.log(data)
 
})