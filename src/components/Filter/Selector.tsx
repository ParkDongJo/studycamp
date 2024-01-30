import { FormEvent } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Props {
  placeholder: string;
  options: string[];
  onChange: (selected: string) => void;
}
export default function Selector(props: Props) {
  const { placeholder, options, onChange } = props;

  const handleChange = (event: FormEvent) => {
    const { value } = event.target as HTMLInputElement;
    onChange(value);
  };

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map(option => (
            <SelectItem key={option} value={option} onChange={handleChange}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
