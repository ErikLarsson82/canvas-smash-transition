const canvas = document.getElementById('mycanvas')
const ctx = canvas.getContext('2d')

let cord = { x: 0 }

let snap = null

function render() {
  ctx.clearRect(0, 0, 1000, 1000)

  const diff = Math.round(cord.x)

  ctx.fillStyle = '#f00'
  ctx.save()
  ctx.translate(0 - diff, 0 - diff)
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(270, 0)
  ctx.lineTo(350, 540)
  ctx.lineTo(0, 610)
  ctx.closePath()
  ctx.fill()
  ctx.clip()
  ctx.drawImage(snap, 0, 0)
  ctx.restore()

  ctx.fillStyle = '#0f0'
  ctx.save()
  ctx.translate(0 + diff, 0 - diff)
  ctx.beginPath()
  ctx.moveTo(270, 0)
  ctx.lineTo(1000, 0)
  ctx.lineTo(1000, 405)
  ctx.lineTo(350, 540)
  ctx.closePath()
  ctx.fill()
  ctx.clip()
  ctx.drawImage(snap, 0, 0)
  ctx.restore()
  ctx.fillStyle = '#00f'
  ctx.save()
  ctx.translate(0 - diff, 0 + diff)
  ctx.beginPath()
  ctx.moveTo(0, 610)
  ctx.lineTo(350, 540)
  ctx.lineTo(420, 1000)
  ctx.lineTo(0, 1000)
  ctx.closePath()
  ctx.fill()
  ctx.clip()
  ctx.drawImage(snap, 0, 0)
  ctx.restore()

  ctx.fillStyle = '#0ff'
  ctx.save()
  ctx.translate(0 + diff, 0 + diff)
  ctx.beginPath()
  ctx.moveTo(420, 1000)
  ctx.lineTo(350, 540)
  ctx.lineTo(1000, 405)
  ctx.lineTo(1000, 1000)
  ctx.closePath()
  ctx.fill()
  ctx.clip()
  ctx.drawImage(snap, 0, 0)
  ctx.restore()
}

function startRender() {
  document.getElementById('text1').innerHTML = ''
  document.getElementById('text2').innerHTML = ''
  document.getElementById('text3').innerHTML = ''
  document.getElementById('text4').innerHTML = ''


  new TWEEN.Tween(cord)
    .to({ x: 20 }, 700)
    .easing(TWEEN.Easing.Elastic.InOut)
    .onComplete(() => {

        new TWEEN.Tween(cord)
          .to({ x: 600 }, 100)
          .easing(TWEEN.Easing.Quadratic.In)
          .onComplete(() => {

            })
          .start()
      })
    .start()

  requestAnimationFrame(animate)
}

function animate(time) {
    requestAnimationFrame(animate)
    TWEEN.update(time)
    render()
}

function renderCross() {
  html2canvas(document.querySelector('body')).then(c => { snap = c; startRender() })
}
