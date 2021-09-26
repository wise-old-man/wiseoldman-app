import { cn } from 'styles/utils';
import { TextAreaCounter, TextAreaElement, TextAreaWrapper } from './TextArea.styles';

export const TextArea: React.FC<React.ComponentPropsWithoutRef<'textarea'>> = ({ ...props }) => {
  const hasCounter = props.maxLength && props.maxLength > 0;

  return (
    <TextAreaWrapper>
      <TextAreaElement {...props} className={cn({ '-with-counter': hasCounter })} />
      {hasCounter && (
        <TextAreaCounter>
          {`${props.value ? props.value.toString().length : 0} / ${props.maxLength}`}
        </TextAreaCounter>
      )}
    </TextAreaWrapper>
  );
};
