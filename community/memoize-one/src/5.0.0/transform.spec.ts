import { applyTransform } from '@codeshift/test-utils';
import * as transformer from './transform';

describe('memoize-one@5.0.0 transform', () => {
  it('should transform correctly', () => {
    const result = applyTransform(
      transformer,
      `
        import foo from '<% packageName %>';
        console.log(foo);
      `,
      { parser: 'tsx' },
    );

    expect(result).toMatchInlineSnapshot();
  });
});
