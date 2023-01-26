function createPass(length) {
  let str = '';
  const letters = "ABCDEFGabcdefg!&@^%#$";
  for(let i = 0; i < length; i++) {
    str += letters[Math.floor((Math.random() * letters.length))];
 }
  return str;
}



function resInput() {
  count.textContent = input.value
  displayPassword();
}




const input = document.getElementById("rangeSize");
const count = document.getElementById("rangeValue");

const res = document.querySelector('#res-pass');

function displayPassword() {
  res.textContent = createPass(input.value);
}

displayPassword();

input.addEventListener("input", resInput);

const buttonCopy = document.querySelector('#btn-copy');
buttonCopy.addEventListener("click", () => console.log(res.textContent));
