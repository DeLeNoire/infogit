import { render } from '@testing-library/react';

import Sharedlib from './sharedlib';

describe('Sharedlib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Sharedlib />);
    expect(baseElement).toBeTruthy();
  });
});
