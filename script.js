let quantity=0;
function showQuantity(){
  console.log(`Cart Quantity:${quantity}`);
}
function addToCart(){
  quantity+=1;
  showQuantity();
}
function addtwo(){
  quantity+=2;
  showQuantity();
}
function addthree(){
  quantity+=3;
  showQuantity();
}
function reset(){
  quantity=0;
  showQuantity();
}