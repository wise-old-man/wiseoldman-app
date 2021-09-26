import { Listbox } from '@headlessui/react';
import { Input } from 'components';
import React, { useState } from 'react';
import { cn } from 'styles/utils';
import {
  InputWrapper,
  OptionIcon,
  OptionLabel,
  OptionsContainer,
  OptionWrapper,
  SelectorButton,
  SelectorButtonArrow,
  SelectorWrapper
} from './Selector.styles';

interface SelectorOption {
  value: string | null;
  label: string;
  icon?: string;
}

type SelectorOptionValue = string | null;
type SelectorDefaultOption = SelectorOption & { included?: boolean };

interface SelectorProps {
  onSelected: (optionValue: SelectorOptionValue) => void;
  options: SelectorOption[];
  defaultOption?: SelectorDefaultOption;
  selectedValue?: SelectorOptionValue;
  disabled?: boolean;
  enableSearch?: boolean;
}

function mergeOptions(options: SelectorOption[], defaultOption?: SelectorDefaultOption) {
  if (!defaultOption || !defaultOption.included) return options;
  return [defaultOption, ...options];
}

export const Selector: React.FC<SelectorProps> = ({
  selectedValue,
  defaultOption,
  options,
  onSelected,
  enableSearch,
  disabled
}) => {
  const [filter, setFilter] = useState('');

  const mergedOptions = mergeOptions(options, defaultOption);
  const filteredOptions = mergedOptions.filter(o => o.label.toLowerCase().includes(filter));
  const selectedOption = selectedValue ? mergedOptions.find(o => o.value === selectedValue) : defaultOption;

  return (
    <Listbox value={selectedOption?.value} onChange={onSelected} disabled={disabled}>
      {({ open }) => (
        <SelectorWrapper>
          <SelectorButton>
            {selectedOption && selectedOption.icon && <OptionIcon src={selectedOption.icon} />}
            <OptionLabel>{selectedOption ? selectedOption.label : '---'}</OptionLabel>
            <SelectorButtonArrow
              className={cn({ '-open': open })}
              src="https://wiseoldman.net/img/icons/dropdown_arrow_down.svg"
              alt=""
              width={20}
              height={20}
            />
          </SelectorButton>
          <OptionsContainer>
            {enableSearch && (
              <InputWrapper>
                <Input
                  type="text"
                  placeholder="Search.."
                  value={filter}
                  onChange={e => setFilter(e.target.value)}
                />
              </InputWrapper>
            )}

            {filteredOptions.map(option => (
              <Listbox.Option key={option.value} value={option.value}>
                {({ active, selected }) => (
                  <OptionWrapper className={cn({ '-active': active, '-selected': selected })}>
                    {option.icon && <OptionIcon src={option.icon} alt="" />}
                    <OptionLabel>{option.label}</OptionLabel>
                  </OptionWrapper>
                )}
              </Listbox.Option>
            ))}
          </OptionsContainer>
        </SelectorWrapper>
      )}
    </Listbox>
  );
};
