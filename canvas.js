// getting a reference to our HTML element
const canvas = document.querySelector('canvas')

// initiating 2D context on it
const c = canvas.getContext('2d')

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight
})

// c.strokeStyle = 'white'
// c.fillStyle = 'blue'
// c.rect(100, 20, 150, 100)
// c.stroke()
// c.fill()

// c.fillStyle = 'red'
// c.fillRect(400, 500, 300, 250)

// // Uncomment to remove the first two blocks
// // c.clearRect(0, 0, canvas.width, canvas.height)
// c.fillStyle = 'green'
// c.fillRect(1500, 500, 300, 250)

// Just a basic line
c.beginPath()
c.moveTo(40, 250)
c.lineTo(200, 500)
c.strokeStyle = 'red'
c.stroke()

// Draw the letter M
c.beginPath()
c.moveTo(1500, 700)
c.lineTo(1600, 450)
c.lineTo(1700, 700)
c.lineTo(1800, 450)
c.lineTo(1900, 700)
c.strokeStyle = 'blue'
c.stroke()

// Let's now draw a house
c.lineWidth = 10
c.strokeStyle = 'red'
c.fillStyle = 'red'

// Walls 
c.strokeRect(800, 500, 300, 200)

// Door
c.fillRect(925, 600, 50, 100)

// Roof 
c.beginPath()
c.moveTo(700, 500)
c.lineTo(1200, 500)
c.lineTo(950, 300)
c.lineTo(700, 500)
c.stroke()

c.lineWidth = 5
c.beginPath()
c.arc(400, 400, 50, 0, Math.PI * 2)
c.stroke()

c.lineWidth = 5
c.strokeStyle = 'white'

c.beginPath()
c.moveTo(400, 400)
c.lineTo(400, 300)
c.quadraticCurveTo(450, 250, 500, 300)
c.lineTo(500, 400)
c.stroke()

c.beginPath()
c.moveTo(800, 400);
c.bezierCurveTo(800, 150, 1200, 700, 1200, 400);
c.stroke()

c.font = '60px Times-New-Roman'
c.fillText("Hello World", 600, 500)
c.strokeText('Hello World', 1200, 500)

