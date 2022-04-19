import React, { useState } from 'react';

type AutocompleteProps = {
  id: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function Autocomplete({ id, value, options, onChange }: AutocompleteProps) {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  const filterOptions = (inputValue: string) => {
    const filtered = options.filter(
      (option) => option.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
    setFilteredOptions(filtered);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value: inputValue } = target;
    onChange(inputValue);
    filterOptions(inputValue);
  };

  const onSelectOption = (option: string) => {
    onChange(option);
    filterOptions(option);
  };

  return (
    <div className="autocomplete">
      <input
        id={id}
        type="text"
        name={id}
        value={value}
        onChange={onInputChange}
      />
      {value && (
        <div className="autocomplete-items">
          {filteredOptions.map((option) => (
            <div
              key={option}
              onClick={() => onSelectOption(option)}
              onKeyDown={() => onSelectOption(option)}
              role="button"
              tabIndex={0}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Autocomplete;
