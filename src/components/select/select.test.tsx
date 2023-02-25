import { render } from '@testing-library/react';
import Select from '.';

describe('Select', () => {
  it('should render correctly with options', () => {
    const { container } = render(
      <Select
        options={[{ label: 'label', value: 'value' }]}
        onChange={() => {
          return;
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
