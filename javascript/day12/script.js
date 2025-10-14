// class name {   
//     constructor(a,b) {
//         this.uname=a;
//         this.age=b;
//     }

//     display(){
//         console.log("hello this my class",this.uname,this.age);
        
//     }
// }

// let obj=new name("akash",25);

// obj.display();

// class base{
//     human(){
//         console.log("eating")
//     }
// }

// class son extends base{
//     baby(){
//         console.log("baby also eating milk")
//     }
// }


// let a= new son;
// a.baby();
// a.human()


// class grandfather{
// constructor(){
//     this.name="god"
// }
//     rest(){
//         console.log("Take rest")
//     }
// }

// class father extends grandfather{
//     work(){
//         console.log("take work")
//     }
// }

// class child extends father{
//     study(){
//         console.log("Take study")
//     }
// }

// class killchild extends child{
//     play(){
//         console.log("Play",this.name)
//     }
// }

// let a=new killchild()

// a.play();
// a.rest()
// a.study()
// a.work()


// class father{
//     work(){
//         console.log("work in tcs")
//     }
// }
// class child1 extends father{
//     study(){
//         console.log("child 1 age is 5")
//     }
// }
// class child2 extends father{
//     play(){
//         console.log("child 2 age is 1")
//     }
// }
// let a1=new child1;
// let a2=new child2;

// console.log("child 1")
// a1.study()
// a1.work()
// console.log("child 2")
// a2.play()
// a2.work()

// const father=(base)=>class extends base{
//     work(){
//         console.log("work in tcs")
//     }
// }
// const mother=(base)=>class extends base{
//     working(){
//         console.log("working in zoho")
//     }
// }
// class base{
//     center(){
//         console.log("hello")
//     }
// }

// class child extends mother(father(base)) {}

// let a=new child;

// a.center()
// a.working()
// a.work()


