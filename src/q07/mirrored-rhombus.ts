const size = Number(process.argv[2]);
for(let i=0;i<size;i++){
  let row ="";
  for(let s=0;s-1-i;s++){
    row += " ";
  }
  for(let j=0;j<size;j++){
    row += "*";
  }
  console.log(row);
}