const password = document.getElementById('password')
const background = document.getElementById('background')
password.addEventListener('input', (e)=>{
  e.preventDefault();
  const input = e.target.value
  // console.log(input)
  const length = input.length
  const blurValue = 20 -length * 2
  background.style.filter = `blur(${blurValue}px)`
})