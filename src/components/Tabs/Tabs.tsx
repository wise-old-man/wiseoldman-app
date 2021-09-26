import { Tab as HeadlessTab } from '@headlessui/react';
import React from 'react';
import { cn, toVariant } from 'styles/utils';
import { TabElement, TabListElement, TabListWrapper } from './Tabs.styles';

export const TabGroup = HeadlessTab.Group;
export const TabPanels = HeadlessTab.Panels;
export const TabPanel = HeadlessTab.Panel;

interface TabProps {
  children: React.ReactNode;
}

interface TabListProps {
  variant?: 'default' | 'panel';
  size?: 'small' | 'large';
  children: React.ReactNode;
}

export const TabList: React.FC<TabListProps> = ({ children, size = 'small', variant = 'default' }) => {
  return (
    <TabListWrapper>
      <TabListElement as="div" className={cn(toVariant(variant), toVariant(size))}>
        {children}
      </TabListElement>
    </TabListWrapper>
  );
};

export const Tab: React.FC<TabProps> = ({ children }) => {
  return (
    <HeadlessTab as={React.Fragment}>
      {({ selected }) => <TabElement className={cn({ '--selected': selected })}>{children}</TabElement>}
    </HeadlessTab>
  );
};
