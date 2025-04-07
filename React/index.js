const sum=((a,b)=>{
    return  a+b

})
const sub=((a,b)=>{
    return a-b

})


const mul=((c,d)=>{
    return c*d
})

const div= ((e,f)=>{
   return e/f
})

function Hello (){
    return "Hello pravs this is modules"
}
Hello()


function One(a, callback) {
    let b = 10;
    let result = a + b;
    callback(result); 
}



setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);

// here in ansmonumys or arrwo function
// herre (a,b,c,d callback )  
// mens  a value should write in conslole
// here we shoukd define only one rmainaing  al in console
// means
//  let f=20
//  let  res=a*b*c*d 
//  store   call back in result
//  callback(res)  Last means 
// the value which i declared for f multiplied by all number 
// for consoling i should write *2,3,4,5)

// For console we should only pass 10,3 not 10+3 as arguments
// in parameter also a,b,c in only return a+b 
// or use var let const to declare

function Two(h,i,j,callback){
    // console.log("the res is :",res)
    let e=40;
    // let i = 20
    // let e= 50;
    let result=h*e*i*j;
    callback(result);
}
// Laddu()

function sum1(a,b){
    return a+b
}
// console.log(sum1(2,4))

const sum2 =function(a,b){
    return a-b
}


const sum3=((e,f)=>{
    return e/f
})



export{sum,sub,mul,div,Hello,One,Two,sum1,sum2,sum3}



