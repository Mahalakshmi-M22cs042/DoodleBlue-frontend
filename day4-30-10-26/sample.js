console.log("//forEach example")
const items=['pen','pencil','book','bag'];
items.forEach((item,i)=>{
    console.log(`${i}:${item}`);
});
let tot=0;
[5,10,15].forEach(n=>tot+=n);
console.log(tot);

console.log("//Some, every() function ")
const ages=[16,21,34];
console.log(ages.some(a=>a<18));
console.log(ages.some(a=>a<=18));
console.log(ages.every(a=>a>=18));
console.log(ages.every(a=>a>10));


//IndexOf, includes() 
console.log("//indexOf(), includes() function")
const pets=['cat','dog','cat',NaN]
console.log(pets.indexOf('cat'));
console.log(pets.indexOf('cat',1));
console.log(pets.indexOf('fox'));
console.log(pets.indexOf(NaN));
console.log(pets.includes(NaN));
console.log(pets.includes('cat'));
console.log(pets.includes('fox'));


console.log("//sorting  functions example")
//const n=[1,205,502,101,100,59];
const n=[1,59,101,1000,7];
console.log([...n].sort());
console.log([...n].sort((a,b)=>a-b));
console.log([...n].sort((a,b)=>b-a));

const names=['Zara','arun','Bala'];
names.sort((a,b)=>a.localeCompare(b));
console.log(names);

//push and pop

//push
const newarr=[1,2,3];
const s=newarr.push(4,5);
console.log(s);
console.log(newarr);
//pop
const a=[1,2,3,4];
const b=a.pop(3,4);
console.log(b);
console.log(a);


const nums=[1,2,3,4,5];
console.log(nums.slice(1,3));
console.log(nums.slice(-2));
console.log(nums.slice(2));
console.log(nums.slice());
console.log(nums.slice(-3,-1));
console.log(nums.slice(-3,-3));
console.log(nums.splice(-3,-1))
console.log(nums)
console.log(nums.splice(1,3));
console.log(nums)
