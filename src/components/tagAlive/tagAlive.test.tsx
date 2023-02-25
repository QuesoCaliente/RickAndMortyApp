import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { TagGender, TagAlive } from './index';

describe('TagGender', () => {
  it('should render the female gender icon', () => {
    const { getByTitle } = render(<TagGender gender="Female" />);

    expect(getByTitle('female-icon')).toBeInTheDocument();
  });

  it('should render the female gender text', () => {
    const { getByText } = render(<TagGender gender="Female" />);

    expect(getByText('Femenino')).toBeInTheDocument();
  });
  it('should render the male gender icon', () => {
    const { getByTitle } = render(<TagGender gender="Male" />);

    expect(getByTitle('male-icon')).toBeInTheDocument();
  });

  it('should render the male gender text', () => {
    const { getByText } = render(<TagGender gender="Male" />);

    expect(getByText('Masculino')).toBeInTheDocument();
  });

  it('shoul render the alive status', () => {
    const { getByText } = render(<TagAlive alive={'Alive'} />);

    expect(getByText('Vivo')).toBeInTheDocument();
  });

  it('shoul render the dead status', () => {
    const { getByText } = render(<TagAlive alive={'Dead'} />);

    expect(getByText('Muerto')).toBeInTheDocument();
  });

  it('shoul render the unknown status', () => {
    const { getByText } = render(<TagAlive alive={'unknown'} />);

    expect(getByText('Desconocido')).toBeInTheDocument();
  });
});
