import React from 'react';
import { toVariant } from 'styles/utils';
import { TagSlot, TagButtonElement, TagElement } from './Tag.styles';

type TagVariant = 'default' | 'blue';

interface CommonTagProps {
  variant?: TagVariant;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

type TagProps = CommonTagProps & React.ComponentPropsWithoutRef<'div'>;
type TagButtonProps = CommonTagProps & React.ComponentPropsWithoutRef<'button'>;

export const Tag: React.FC<TagProps> = ({ children, variant = 'default', leftSlot, rightSlot, ...props }) => {
  return (
    <TagElement className={toVariant(variant)} {...props}>
      {leftSlot && <TagSlot className="--left">{leftSlot}</TagSlot>}
      {children}
      {rightSlot && <TagSlot className="--right">{rightSlot}</TagSlot>}
    </TagElement>
  );
};

export const TagButton: React.FC<TagButtonProps> = ({
  children,
  variant = 'default',
  leftSlot,
  rightSlot,
  ...props
}) => {
  return (
    <TagButtonElement className={toVariant(variant)} {...props}>
      {leftSlot && <TagSlot className="--left">{leftSlot}</TagSlot>}
      {children}
      {rightSlot && <TagSlot className="--right">{rightSlot}</TagSlot>}
    </TagButtonElement>
  );
};
