import{sum,sub,mul,div,Hello,One,Two,sum1,sum2,sum3} from './index.js'
console.log(sum(2,3) ,sub(5,5),mul(3,4))
console.log(sub(4,3))
console.log(div(4,2))
console.log(Hello())
// console.log(pravalika(8,5))
One(5, function(res) {
    console.log("The result is:", res);
});
console.log("Start");

console.log("End");

Two(40,20,60,function(result){
    console.log("The Mul is :",result)

})

console.log("ADD : ",sum1(2,4))
console.log("SUB : ",sum2(20,10))
console.log("DIV: " ,sum3(40,20))
