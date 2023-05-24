import { Select as SelectChakra } from '@chakra-ui/react';

interface ISelect {
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  className?: string;
}

export default function Select({ options, onChange, className }: ISelect) {
  return (
    <SelectChakra
      variant="outline"
      className={className}
      bg="white"
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
