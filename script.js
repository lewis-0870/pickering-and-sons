const myImage = document.getElementById('myImage');
myImage.addEventListener('click', () => {
  myImage.classList.add('pop-up');
  document.getElementById("hidecard").style.display = "block";
  hidecard.classList.add('showcard');
});