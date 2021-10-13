// import { MantineProvider } from "@mantine/core"
// import type { AppProps } from "next/app"

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// const WithProvider = (props: AppProps) => {
//   return (
//     <MantineProvider theme={{ fontFamily: "Open Sans" }}>
//       <MyApp {...props} />
//     </MantineProvider>
//   )
// }
// export default WithProvider

import { MantineProvider, NormalizeCSS, GlobalStyles } from "@mantine/core"
import { AppProps } from "next/app"

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <MantineProvider
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <NormalizeCSS />
        <GlobalStyles />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
