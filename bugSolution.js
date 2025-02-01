function foo(a,b){
if(typeof a === 'number' && typeof b === 'number'){
return a + b; 
}else{
console.error("Invalid input types.  Operands must be numbers.");
return NaN;
}
}
console.log(foo(1,2)); //3
console.log(foo(1,"2")); //Error
console.log(foo(true,false)); //Error