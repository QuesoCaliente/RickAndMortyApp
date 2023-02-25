import { Box } from '@chakra-ui/react';
import { fireEvent, render } from '@testing-library/react';
import { characters } from '@utils/testingData';
import { it, describe, expect, vi } from 'vitest';
import CharacterList from '.';

describe('CharacterList', () => {
  it('should render the character list in grid list', () => {
    const nextPage = vi.fn();

    const { getByText } = render(
      <CharacterList
        characters={characters}
        nextPage={nextPage}
        hasNextPage={false}
        type={'grid'}
      />
    );

    expect(getByText('Rick Sanchez')).toBeInTheDocument();
    expect(getByText('Morty Smith')).toBeInTheDocument();
    expect(getByText('Summer Smith')).toBeInTheDocument();
    expect(getByText('Beth Smith')).toBeInTheDocument();
    expect(getByText('Jerry Smith')).toBeInTheDocument();

    expect(nextPage).not.toHaveBeenCalled();
  });

  it('should render the character list in table list', () => {
    const nextPage = vi.fn();

    const { getByText } = render(
      <CharacterList
        characters={characters}
        nextPage={nextPage}
        hasNextPage={false}
        type={'table'}
      />
    );

    expect(getByText('Rick Sanchez')).toBeInTheDocument();
    expect(getByText('Morty Smith')).toBeInTheDocument();
    expect(getByText('Summer Smith')).toBeInTheDocument();
    expect(getByText('Beth Smith')).toBeInTheDocument();
    expect(getByText('Jerry Smith')).toBeInTheDocument();

    expect(nextPage).not.toHaveBeenCalled();
  });

  it('should render the character list in left list', () => {
    const nextPage = vi.fn();

    const { getByText } = render(
      <CharacterList
        characters={characters}
        nextPage={nextPage}
        hasNextPage={true}
        type={'left'}
      />
    );

    expect(getByText('Rick Sanchez')).toBeInTheDocument();
    expect(getByText('Morty Smith')).toBeInTheDocument();
    expect(getByText('Summer Smith')).toBeInTheDocument();
    expect(getByText('Beth Smith')).toBeInTheDocument();
    expect(getByText('Jerry Smith')).toBeInTheDocument();
  });
});
