// //sample 1
let name =["Mahalakshmi","Mohan","Ramesh","Suresh","Karthik"];
const newName=name.map((name,index )=>{
    return `My name is ${name} and my index is ${index}`;
});

console.log(newName);
console.log(name);

// //sample 2
let names=[1,2,3,4,5];
const num=names.filter((name,index)=>name%2===0);
console.log(num);
console.log(names);

// //sample 3
let users=[
    {id:1,name:"Mahalakshmi",age:22,email:"mahalakshmi@example.com"},
    {id:2,name:"Mohan",age:23,email:"mohan@example.com"},
    {id:3,name:"Ramesh",age:24,email:"ramesh@example.com"},
    {id:4,name:"Suresh",age:25,email:"suresh@example.com"},
    {id:5,name:"Karthik",age:26,email:"karthik@example.com"},
    {id:6,name:"Sarath",age:27,email:"sarath@example.com"},
    {id:7,name:"Anu",age:22,email:"anu@example.com"},
    {id:8,name:"Tamil",age:23,email:"tamil@example.com"},
    {id:9,name:"Jana",age:24,email:"jana@example.com"},
    {id:10,name:"Sankar",age:40,email:"sankar@example.com"},
    {id:11,name:"Varshini",age:21,email:"varshini@example.com"},
    {id:12,name:"Raji",age:38,email:"raji@example.com"}
];

console.log(users);

const u=users.find((i)=>i.id===1);
console.log(u.name);

const v=users.find((x)=>x.id===2);
console.log(v.email);

const w=users.find((y)=>y.name==="Karthik");
console.log(w.email);

const z=users.find((a)=>a.id===7);
console.log(z);

const i=users.findIndex((a)=>a.id===13);
console.log(i);

const y=users.findIndex((a)=>a.id===11);
console.log(y);


//const letter=["a","b","c","d"];
const letter=[1,2,3,4,5];
//const letter=[];
const tot=letter.reduce((acc,cur)=>acc+cur,0);
console.log(tot);