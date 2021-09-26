import { SwitchRoot, SwitchThumb } from './Switch.styles';

interface SwitchProps {
  checked?: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = props => {
  return (
    <SwitchRoot {...props}>
      <SwitchThumb />
    </SwitchRoot>
  );
};
