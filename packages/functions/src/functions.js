export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
export const removeDuplicates = xs => Array.from(new Set(xs))
export const animateRight = el => {
  el.style.setProperty('transition', 'transform 1s')
  el.style.setProperty('transform', `translate(${el.getBoundingClientRect().x + 100}px)`)
}
