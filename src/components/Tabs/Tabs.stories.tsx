import { ComponentMeta } from '@storybook/react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from './Tabs';

export default {
  title: 'Tabs',
  component: Tab
} as ComponentMeta<typeof Tab>;

export const DefaultTabs: React.FC = () => {
  return (
    <TabGroup manual>
      <TabList>
        <Tab>Overview</Tab>
        <Tab>Competitions</Tab>
        <Tab>Gained</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Overview Content</TabPanel>
        <TabPanel>Competitions Content</TabPanel>
        <TabPanel>Gained Content</TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export const PanelTabs: React.FC = () => {
  return (
    <TabGroup manual>
      <TabList variant="panel">
        <Tab>Overview</Tab>
        <Tab>Competitions</Tab>
        <Tab>Gained</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Overview Content</TabPanel>
        <TabPanel>Competitions Content</TabPanel>
        <TabPanel>Gained Content</TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export const LargeTabs: React.FC = () => {
  return (
    <TabGroup manual>
      <TabList size="large">
        <Tab>Overview</Tab>
        <Tab>Competitions</Tab>
        <Tab>Gained</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Overview Content</TabPanel>
        <TabPanel>Competitions Content</TabPanel>
        <TabPanel>Gained Content</TabPanel>
      </TabPanels>
    </TabGroup>
  );
};
