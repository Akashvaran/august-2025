// let child=document.getElementById("child")

// let mydiv=document.createElement('p')
// mydiv.textContent="hello my name is akash varan "

// document.body.appendChild(mydiv)

// child.appendChild(mydiv)

// child.remove()
// child.removeChild(mydiv)


// let parent=document.getElementById("parent")
// let child= document.getElementById('child')


// let head=document.createElement('h1')
// head.textContent="this is a head element"

// parent.replaceChild(head, child)



// let parent=document.getElementById("parent")
// let child= document.getElementsByTagName('p')


// let head=document.createElement('h1')
// head.textContent="this is a head element"


// parent.replaceChild(head, child[0])

// document.getElementById('child').textContent="my name is akash varan"
// document.getElementById('child').innerHTML="<h1> my name is akash varan </h1>"
// document.getElementById('child').innerText="<h1> my name is akash varan </h1>"

let parent=document.getElementById("parent")

let img=document.createElement('img')
img.setAttribute('src',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s")
img.setAttribute('alt',"hello this my image")
// img.removeAttribute('alt')

parent.appendChild(img)

let image=document.querySelector('img')

let value=image.getAttribute('src')

console.log(value)