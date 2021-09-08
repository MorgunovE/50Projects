const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container')
//es6
// left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
// left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
// right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
// right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
//es5
left.addEventListener('mouseenter', function () {return container.classList.add('hover-left')})
left.addEventListener('mouseleave', function () {return container.classList.remove('hover-left')})
right.addEventListener('mouseenter', function () {return container.classList.add('hover-right')})
right.addEventListener('mouseleave', function () {return container.classList.remove('hover-right')})