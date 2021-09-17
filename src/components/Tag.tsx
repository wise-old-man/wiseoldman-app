import { styled } from '../../stitches.config';

const TagWrapper = styled('span', {});

interface TagProps extends React.ComponentProps<typeof TagWrapper> {
  someMadeUpProp?: string;
}

export const Tag: React.FC<TagProps> = ({ children, someMadeUpProp, ...props }) => {
  return (
    <>
      {someMadeUpProp}
      <TagWrapper {...props}>{children}</TagWrapper>
    </>
  );
};

/*


 backgroundColor: 'transparent',
  fontSize: '$2',
  color: '$gray11',
  padding: '$2 $3',
  border: '1px solid $gray11',
  borderRadius: '$max',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
*/
// const TagItemSlot = styled('span', {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',

//     variants: {
//       variant: {
//         left: { marginRight: '$2' },
//         right: { marginLeft: '$2' }
//       }
//     }
//   });

// export const Tag: React.FC<TagProps> = ({ children, leftSlot, rightSlot, ...props }) => {
//   return (
//     <TagWrapper {...props}>
//       {leftSlot !== undefined && <TagItemSlot variant="left">{leftSlot}</TagItemSlot>}
//       {children}
//       {rightSlot !== undefined && <TagItemSlot variant="right">{rightSlot}</TagItemSlot>}
//     </TagWrapper>
//   );
// };
