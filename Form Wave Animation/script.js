// es6
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => `<span style="transition-delay: ${index * 50}ms">${letter}</span>`)
    .join('')
})

//es5
// var labels = document.querySelectorAll('.form-control label'); // es6
//
// labels.forEach(function (label) {
//   label.innerHTML = label.innerText.split('').map(function (letter) {
//     return '<span style="transition-delay: 50ms">letter</span>'
//   }).join('');
// });