let score = Number(ProcessingInstruction.argv[2]);
if(let i>=80){
    let score = 'A';
}
else if(let i>=70){
    let score = 'B';
}
else if(let i>=60){
    let score = 'C';
}
else if(let i>=50){
    let score = 'D';
}
else if(let i<50){
    let score = 'F';
}
else{
    let score = 'Invalid Input';
}
console.log(score);