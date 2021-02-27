import 'nextra-theme-docs/style.css'

export default function Nextra({ Component, pageProps }) {
  console.log(pageProps);
  return <Component {...pageProps} />
}


