import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Selector } from './Selector';

export default {
  title: 'Selector',
  component: Selector
} as ComponentMeta<typeof Selector>;

const OPTIONS = [
  {
    value: 'hespori',
    label: 'Hespori',
    icon: 'https://wiseoldman.net/img/runescape/icons_small/hespori.png'
  },
  {
    value: 'herblore',
    label: 'Herblore',
    icon: 'https://wiseoldman.net/img/runescape/icons_small/herblore.png'
  },
  {
    value: 'mining',
    label: 'Mining',
    icon: 'https://wiseoldman.net/img/runescape/icons_small/mining.png'
  },
  {
    value: 'callisto',
    label: 'Callisto',
    icon: 'https://wiseoldman.net/img/runescape/icons_small/callisto.png'
  },
  {
    value: 'Scorpia',
    label: 'Scorpia',
    icon: 'https://wiseoldman.net/img/runescape/icons_small/scorpia.png'
  },
  {
    value: 'zulrah',
    label: 'zulrah',
    icon: 'https://wiseoldman.net/img/runescape/icons_small/zulrah.png'
  },
  {
    value: 'soul_wars_zeal',
    label: 'soul_wars_zeal',
    icon: 'https://wiseoldman.net/img/runescape/icons_small/soul_wars_zeal.png'
  }
];

export const Default: React.FC = () => {
  const [selectedOptionValue, setSelectedOptionValue] = useState<string | null>(null);
  return (
    <Selector selectedValue={selectedOptionValue} onSelected={setSelectedOptionValue} options={OPTIONS} />
  );
};

export const WithDefaultOption: React.FC = () => {
  const [selectedOptionValue, setSelectedOptionValue] = useState<string | null>(null);
  return (
    <Selector
      defaultOption={{ value: null, label: 'Any metric', included: true }}
      selectedValue={selectedOptionValue}
      onSelected={setSelectedOptionValue}
      options={OPTIONS}
    />
  );
};

export const WithSearchEnabled: React.FC = () => {
  const [selectedOptionValue, setSelectedOptionValue] = useState<string | null>(null);
  return (
    <Selector
      enableSearch
      selectedValue={selectedOptionValue}
      onSelected={setSelectedOptionValue}
      options={OPTIONS}
    />
  );
};
