import Head from 'next/head';
import Link from 'next/link';
import { Container, Panel, ReturnLink, SubTitle, Title, TrollImage } from 'styles/404.styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>

      <Panel>
        <Title>Ooops!</Title>
        <SubTitle>That page could not be found.</SubTitle>
        <Link href="/" passHref>
          <ReturnLink>Return to the Homepage</ReturnLink>
        </Link>
        <TrollImage src="/img/troll.png" height={300} width={182} />
      </Panel>
    </Container>
  );
};

export default NotFound;
