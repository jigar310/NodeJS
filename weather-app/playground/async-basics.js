console.log('Starting app');

setTimeout(()=>{
  console.log('Inside of callback');
},2000);

setTimeout(()=>{
  console.log('Second settimeout works');
},0);
console.log('Finishing up');

for(var i=0;i<1000000;i++){
  console.log(i);
}
