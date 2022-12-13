// getting a reference to our HTML element
const canvas = document.querySelector('canvas')

// initiating 2D context on it
const c = canvas.getContext('2d')

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight
})

while (true) {
  setTimeout(() => {  c.strokeStyle = 'white'
  c.fillStyle = 'red'
  c.rect(100, 20, 150, 100)
  c.stroke()
  c.fill()}, 5000);
  c.clearRect(0, 0, canvas.width, canvas.height)
  
  setTimeout(() => {  c.strokeStyle = 'white'
  c.fillStyle = 'blue'
  c.rect(100, 20, 150, 100)
  c.stroke()
  c.fill()}, 5000);
  c.clearRect(0, 0, canvas.width, canvas.height)

  setTimeout(() => {  c.strokeStyle = 'white'
  c.fillStyle = 'green'
  c.rect(100, 20, 150, 100)
  c.stroke()
  c.fill()}, 5000);
  c.clearRect(0, 0, canvas.width, canvas.height)
}
