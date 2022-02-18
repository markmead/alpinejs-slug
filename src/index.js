import slugify from "slugify";

export default function (Alpine) {
  Alpine.directive("slug", (el, { expression }, { evaluateLater, effect }) => {
    let setInputValue = evaluateLater(expression);

    effect(() => {
      setInputValue((string) => {
        el.value = slugify(string, {
          lower: true,
        });
      });
    });
  });
}
