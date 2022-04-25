
/**
 * @jest-environment jsdom
 */

 it('use', () => {
    
    const rootDiv = document.body.innerHTML = "<div id='rootDiv'>Publicar</div>";
    
    // const component = component();
    // rootDiv.appendChild(component);
    
    expect(rootDiv).not.toBeNull();
    // expect(rootDiv).toContain(component());
  });