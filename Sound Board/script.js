const sounds = ['Clouds', 'Invasion', 'Scientific', 'Ways', 'Upside', 'Sonic',]

sounds.forEach(sound => {
  let btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound
  btn.addEventListener('click', ()=>{
    stopSongs()
    document.getElementById(sound).play()
  })
  // console.log(btn)
  let buttons = document.getElementById('buttons')
  document.getElementById('buttons').appendChild(btn)
})
function stopSongs() {
  sounds.forEach(sound =>{
    const song = document.getElementById(sound)
    song.pause()
    song.currentTime = 0
  })
}