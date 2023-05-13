// function change color 
// function Red(){
//     let color = document.getElementById("Red");
//     document.body.style.background = "Red";
//     console.log("")
// }
// function Green(){
//     let color = document.getElementById("Green");
//     document.body.style.background = "Green";
// }
// function blue(){
//     let color = document.getElementById("blue");
//     document.body.style.background = "blue";
// }
// // input color change

// document.getElementById("btn2").onclick = () => {
//     var ress = document.getElementById("IMP").value;
//     document.body.style.background = ress;

for each loop type 
let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("aarr").innerHTML = text;
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}
// map loop
const numbers = [4, 9, 16, 25];
document.getElementById("arr2").innerHTML = numbers.map(Math.sqrt);
//  filter loop
const ages = [32, 33, 16, 40];

document.getElementById("arr3").innerHTML = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
find loop

const ages = [ 10, 18, 20, 33, 44];

document.getElementById("arr4").innerHTML = ages.find(checkAge);

function checkAge(age) {
  return age < 21;
}