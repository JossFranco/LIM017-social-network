
/**
 * @jest-environment jsdom
 */

 it('use jsdom in this test file', () => {
    const rootDiv = document.createElement('div');
    expect(rootDiv).not.toBeNull();
  });