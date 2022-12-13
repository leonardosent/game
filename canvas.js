// getting a reference to our HTML element
const canvas = document.querySelector('canvas')

// initiating 2D context on it
const c = canvas.getContext('2d')

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight
})
