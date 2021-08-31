const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes() {
  // console.log(window.innerHeight / 5 * 4)
  const tridderBotton = window.innerHeight / 5 * 4
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < tridderBotton) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
  // Array.prototype.forEach.call(boxes, function (box) {
  //   if (box.getBoundingClientRect().top < tridderBotton) {
  //     box.classList.add('show')
  //   } else {
  //     box.classList.remove('show')
  //   }
  // });
}