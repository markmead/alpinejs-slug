import slugify from 'slugify'

export default function (Alpine) {
  Alpine.directive('slug', (el, { expression }, { evaluateLater, effect }) => {
    const setValue = evaluateLater(expression)
    const isInput = el.tagName === 'INPUT'

    effect(() => {
      setValue((passedString) => {
        const stringSlug = slugify(passedString, {
          lower: true,
        })

        isInput ? (el.value = stringSlug) : (el.innerText = stringSlug)
      })
    })
  })
}
