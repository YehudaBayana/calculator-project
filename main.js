function numberInput(theNum) {
  theInput.innerHTML += theNum;
  theSecondInput.innerHTML = theInput.innerHTML;
}
let savingFirstInput;
let sign;
multiply.addEventListener('click', () => {
  savingFirstInput = theInput.innerHTML;
  theSecondInput.innerHTML += ' X ';
  theInput.innerHTML = '';
  sign = '*';
});
division.addEventListener('click', () => {
  savingFirstInput = theInput.innerHTML;
  theSecondInput.innerHTML += ' / ';
  theInput.innerHTML = '';
  sign = '/';
});
minus.addEventListener('click', () => {
  savingFirstInput = theInput.innerHTML;
  theSecondInput.innerHTML += ' - ';
  theInput.innerHTML = '';
  sign = '-';
});
add.addEventListener('click', () => {
  savingFirstInput = theInput.innerHTML;
  theSecondInput.innerHTML += ' + ';
  theInput.innerHTML = '';
  sign = '+';
});
result.addEventListener('click', () => {
  if (sign === '*') {
    theInput.innerHTML *= savingFirstInput;
  }
  if (sign === '/') {
    theInput.innerHTML = savingFirstInput / theInput.innerHTML;
  }
  if (sign === '+') {
    theInput.innerHTML = Number(savingFirstInput) + Number(theInput.innerHTML);
  }
  if (sign === '-') {
    theInput.innerHTML = savingFirstInput - theInput.innerHTML;
  }
});
c.addEventListener('click', () => {
  theInput.innerHTML = '';
  theSecondInput.innerHTML = '';
});
