import slugify from "slugify";

export default function (Alpine) {
  Alpine.directive("slug", (el, { expression }, { evaluateLater, effect }) => {
    let updateInput = evaluateLater(expression);

    effect(() => {
      updateInput((string) => {
        el.value = slugify(string, {
          lower: true,
        });
      });
    });
  });
}
