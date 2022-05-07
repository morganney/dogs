import { delay, animateRight, removeDuplicates } from './functions.js'

export const demo = () => {
  document.getElementById('delay').addEventListener('click', async () => {
    await delay(2000)
    alert('done!')
  })
  document.getElementById('animateRight').addEventListener('click', () => {
    animateRight(document.getElementById('block'))
  })
  document.getElementById('removeDuplicates').addEventListener('click', () => {
    alert(removeDuplicates([5, true, false, true, 7, 7]))
  })
}
