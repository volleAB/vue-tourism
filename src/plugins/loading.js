/* eslint-disable */

function createLoading (options) {
  let container = document.getElementById(options.divId)
  let clip = document.createElement('div')
  let left = document.createElement('div')
  let right = document.createElement('div')
  let count = document.createElement('b')
  let style = document.createElement('style')
  let countTxt = 0
  let flag = false

  clip.className = 'clip'
  left.className = 'loadingLeft'
  right.className = 'loadingRight'
  left.classList.add('loadingBar')
  right.classList.add('loadingBar')

  function destroy () {
    container.style.display = 'none'
  }

  function doCount () {
    countTxt++
    count.innerText = countTxt
    if (countTxt < 100) {
      setTimeout(() => {
        doCount()
      }, parseInt(options.animationTime) * 10)
    } else {
      // document.getElementById(options.divId).classList.add('fade-out')
      // setTimeout(() => {
      //   destroy()
      // }, 1000)
    }
  }

  doCount()

  style.innerText = '#' + options.divId + ', ' + '.clip' + ', ' + '.loadingLeft' + ', ' + '.loadingRight' + '{' +
  '   position: absolute;' +
  '   width: ' + options.divSize + ';' +
  '   height: ' + options.divSize + ';' +
  '   box-sizing: border-box;' +
  '   border-radius: 100%;' +
  '}\n' +

  '#' + options.divId + '{' +
  '   border: ' + options.loadingBorder + ' solid ' + options.loadingBackgroundColor + ';' +
  '   animation: pulse ease-out 1s ' + options.animationTime + ';' +
  '}\n' +

  '#' + options.divId + ' .clip ' + '{' +
  '   top: -' + options.loadingBorder + ';' +
  '   left: -' + options.loadingBorder + ';' +
  '   border: none;' +
  '   clip: rect(0px ' + options.divSize + ' ' + options.divSize + ' ' + parseInt(options.divSize) / 2 + 'px' + ');' +
  '   animation: loadingClip ' + options.animationTime + ' linear ' + (options.infinite ? 'infinite' : '') + ';' +
  '   animation-fill-mode: forwards;' +
  '}\n' +

  '#' + options.divId + ' .loadingBar' + '{' +
  '   border: ' + options.loadingBorder + ' solid rgba(0,0,0,0);' +
  '   border-top: ' + options.loadingBorder + ' solid ' + options.loadingColor + ';' +
  '   border-left: ' + options.loadingBorder + ' solid ' + options.loadingColor + ';' +
  '}\n' +

  '#' + options.divId + ' .loadingLeft ' + '{' +
  '   animation: loadingLeft ' + options.animationTime + ' linear ' + (options.infinite ? 'infinite' : '') + ';' +
  '   animation-fill-mode: forwards;' +
  '}\n' +

  '#' + options.divId + ' .loadingRight ' + '{' +
  '   animation: loadingRight ' + options.animationTime + ' linear ' + (options.infinite ? 'infinite' : '') + ';' +
  '   animation-fill-mode: forwards;' +
  '}\n' +

  '#' + options.divId + ' b' + '{' +
  '   position: absolute;' +
  '   top: 50%;' +
  '   left: 50%;' +
  '   transform: translate(-50%, -50%);' +
  '   font-size: ' + parseInt(options.divSize) / 4 + 'px' + ';' +
  '   color: ' + options.countColor +
  '}\n' +

  '@keyframes loadingLeft {' +
  '   0%{transform: rotate(-45deg);}' +
  '   50%{transform: rotate(135deg);}' +
  '   100%{transform: rotate(135deg);}' +
  '}\n' +

  '@keyframes loadingRight {' +
  '   0%{transform: rotate(-45deg);}' +
  '   50%{transform: rotate(135deg);}' +
  '   100%{transform: rotate(315deg);}' +
  '}\n' +

  '@keyframes loadingClip {' +
  '   0%{clip: rect(0px ' + options.divSize + ' ' + options.divSize + ' ' + parseInt(options.divSize)/2 + 'px' + ');}' +
  '   100%{clip:auto;}' +
  '}\n' +

  '@keyframes pulse {' +
  '   from {' +
  '       box-shadow: 0 0 rgba(255, 255, 255, 0.5);' +
  '   }' +
  '   to {' +
  '       box-shadow: 0 0 0 1em rgba(255, 255, 255, 0);' +
  '   }' +
  '}'

  clip.appendChild(left)
  clip.appendChild(right)
  container.appendChild(clip)
  container.appendChild(count)
  document.head.appendChild(style)
}

export { createLoading }
