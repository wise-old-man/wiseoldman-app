import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Table } from './Table';

export default {
  title: 'Table',
  component: Table
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => <Table {...args} />;

const ROWS = [
  {
    id: 5656,
    username: 'Psikoi',
    type: 'Regular',
    build: 'Main',
    level: 50
  },
  {
    id: 34556,
    username: 'Sethmare',
    type: 'Ironman',
    build: 'Level 3',
    level: 90
  }
];

export const Default = Template.bind({});
Default.args = {
  uniqueKeySelector: row => row.id,
  rows: ROWS,
  columns: [
    {
      key: 'id',
      label: 'Id',
      width: 70,
      getValue: row => row.id
    },
    {
      key: 'username',
      label: 'Display Name',
      getValue: row => row.username,
      renderCell: value => <i style={{ color: 'white' }}>{value}</i>
    },
    {
      key: 'type',
      label: 'Type',
      getValue: row => row.type
    },
    {
      key: 'build',
      label: 'Build',
      getValue: row => row.build
    },
    {
      key: 'level',
      label: 'Lvl.',
      getValue: row => row.level,
      renderCell: value => <span className="--green">{value}</span>
    }
  ]
};

export const Empty = Template.bind({});
Empty.args = {
  uniqueKeySelector: row => row.id,
  emptyTableMessage: 'No results found. Sorry!',
  rows: [],
  columns: [
    {
      key: 'id',
      width: 70,
      getValue: row => row.id
    },
    {
      key: 'username',
      getValue: row => row.username,
      renderCell: value => <i style={{ color: 'white' }}>{value}</i>
    },
    {
      key: 'level',
      getValue: row => row.level,
      renderCell: value => `Level ${value}`
    }
  ]
};
