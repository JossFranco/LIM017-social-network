/**
 * @jest-environment jsdom
 */

it('use', () => {
  // eslint-disable-next-line no-multi-assign
  const rootDiv = (document.body.innerHTML = "<div id='rootDiv'>Publicar</div>");

  // const component = component();
  // rootDiv.appendChild(component);

  expect(rootDiv).not.toBeNull();
  // expect(rootDiv).toContain(component());
});
