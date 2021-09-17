import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText, globalCss } from '../../stitches.config';

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 'none',
    boxSizing: 'border-box',
    fontFamily: 'Lato, sans-serif'
  },
  button: {
    cursor: 'pointer'
  }
});

export default class Document extends NextDocument {
  render() {
    globalStyles();

    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=optional"
            rel="stylesheet"
          />

          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
