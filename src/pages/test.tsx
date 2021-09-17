import { Button, LinkButton, IconButton, Input, Tag } from '../components';
import { styled } from '../../stitches.config';

const Background = styled('div', {
  backgroundColor: '$bg',
  minHeight: '1000px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '40px'
});

const Label = styled('b', {
  color: 'white'
});

const Wrapper = styled('div', {
  backgroundColor: '$panelBg',
  padding: '50px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  maxWidth: '500px',
  minWidth: '300px',
  flexWrap: 'wrap',
  width: '500px',
  gap: '20px',

  [`& ${Label}`]: {
    width: '100%',
    paddingBottom: '15px',
    marginBottom: '15px',
    borderBottom: '1px solid gray'
  }
});

function Test() {
  return (
    <Background>
      <Wrapper>
        <Label>Tags</Label>
        <Tag>Ironman</Tag>
        <Tag leftSlot={<img src="https://wiseoldman.net/img/runescape/icons_small/ultimate.png" />}>
          Ironman
        </Tag>
        <Tag as="button" someMadeUpProp="12345">
          Hello World
        </Tag>
      </Wrapper>
      <Wrapper>
        <Label>Inputs</Label>
        <Input
          type="text"
          maxLength={5000}
          onChange={e => console.log(e.target.value)}
          rightSlot={<span style={{ color: 'gray', fontSize: '12px' }}>30/50</span>}
        />
        <Input
          type="text"
          maxLength={5000}
          onChange={e => console.log(e.target.value)}
          rightSlot={<span style={{ color: 'gray', fontSize: '12px' }}>30/50</span>}
          successHighlight
        />
        <Input
          type="text"
          maxLength={5}
          onChange={e => console.log(e.target.value)}
          leftSlot={<img src="https://wiseoldman.net/img/icons/patreon.svg" />}
          errorHighlight
        />
      </Wrapper>

      <Wrapper>
        <Label>Buttons</Label>
        <Button>Primary</Button>
        <Button as="a" variant="secondary" href="https://google.com">
          <img src="https://wiseoldman.net/img/icons/github.svg" />
          Contribute On Github
        </Button>
        <Button variant="secondary" size="large">
          <img src="https://wiseoldman.net/img/icons/github.svg" />
          Contribute On Github
        </Button>
        <Button disabled>Primary Disabled</Button>
        <Button variant="secondary" disabled>
          Secondary Disabled
        </Button>
        <Button fullWidth>Primary Full Width</Button>
        <LinkButton>Link Button</LinkButton>
        <br />
        <IconButton>
          <img src="https://wiseoldman.net/img/icons/patreon.svg" />
        </IconButton>
      </Wrapper>
    </Background>
  );
}

export default Test;
