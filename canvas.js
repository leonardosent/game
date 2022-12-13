// getting a reference to our HTML element
const canvas = document.querySelector('canvas')

// initiating 2D context on it
const c = canvas.getContext('2d')

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight
})

c.strokeStyle = 'white'
c.fillStyle = 'blue'
c.rect(100, 20, 150, 100)
c.stroke()
c.fill()

c.fillStyle = 'red'
c.fillRect(400, 500, 300, 250)

// Uncomment to remove the first two blocks
// c.clearRect(0, 0, canvas.width, canvas.height)
c.fillStyle = 'green'
c.fillRect(1500, 500, 300, 250)
