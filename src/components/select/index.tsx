import { Select as SelectChakra } from '@chakra-ui/react';

interface ISelect {
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

export default function Select({ options, onChange }: ISelect) {
  return (
    <SelectChakra
      variant="outline"
      bg="whiteAlpha.400"
      onChange={e => onChange(e.target.value)}
    >
      {options.map(option => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </SelectChakra>
  );
}
