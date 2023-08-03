import slugify from 'slugify'

export default function (Alpine) {
  Alpine.directive(
    'slug',
    (el, { modifiers, expression }, { evaluateLater, effect, Alpine }) => {
      const setValue = evaluateLater(expression)

      const isInput = el.tagName === 'INPUT'

      const replacementMod = modifiers.includes('replacement')
        ? modifiers[modifiers.indexOf('replacement') + 1]
        : '-'

      const localeMod = modifiers.includes('locale')
        ? modifiers[modifiers.indexOf('locale') + 1]
        : {}

      const isLowercase = !modifiers.includes('keep-case')
      const isStrict = !modifiers.includes('not-strict')
      const isTrimmed = !modifiers.includes('untrimmed')

      let isLazy = modifiers.includes('lazy')

      const slugOptions = {
        lower: isLowercase,
        replacement: replacementMod,
        strict: isStrict,
        trim: isTrimmed,
        locale: localeMod,
      }

      effect(() => {
        setValue((passedString) => {
          if (isLazy) {
            isLazy = false

            return
          }

          const stringSlug = slugify(passedString, slugOptions)

          isInput ? (el.value = stringSlug) : (el.innerText = stringSlug)
        })
      })
    }
  )
}
