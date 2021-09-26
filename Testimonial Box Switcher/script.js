const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonials')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo: 'https://randomuser.me/api/portraits/women/46.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis deserunt doloremque enim explicabo facere fuga, maiores praesentium provident quia soluta sunt. Aliquid, beatae eos error laudantium maiores mollitia nemo nesciunt nihil, non odit officiis quae quasi qui ratione reiciendis rem sequi, temporibus vitae voluptatem voluptatibus. Distinctio ea reiciendis sapiente.'
  },
  {
    name: 'ida Myles',
    position: 'Data',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis deserunt doloremque enim explicabo facere fuga, maiores praesentium provident quia soluta sunt.'
  },
  {
    name: 'Renne Myles',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/55.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis deserunt doloremque enim explicabo facere fuga'
  },
  {
    name: 'Mikel Myles',
    position: 'Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis deserunt doloremque enim explicabo facere fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis deserunt doloremque enim explicabo facere fuga'
  },
  {
    name: 'Sasha Myles',
    position: 'Accountant',
    photo: 'https://randomuser.me/api/portraits/women/13.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis deserunt doloremque enim explicabo facere fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis deserunt doloremque enim explicabo facere fuga'
  },
  {
    name: 'Veeti Myles',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/women/35.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis deserunt doloremque enim explicabo facere fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis deserunt doloremque enim explicabo facere fuga'
  },
];
let idx = 1;
function updateTestimonials() {
  // console.log(testimonials[1])
  const {name, position, photo, text} = testimonials[idx]
  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position
  idx++
  if(idx > testimonials.length - 1){
    idx = 0
  }
}
setInterval(updateTestimonials, 10000)