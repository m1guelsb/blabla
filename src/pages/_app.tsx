import React, { useState } from 'react'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import darkTheme from '../styles/themes/darkTheme'
import lightTheme from '../styles/themes/lightTheme'
import moonIcon from '../assets/images/moon.svg'
import sunIcon from '../assets/images/sun.svg'

import Image from 'next/Image'

const MyApp = ({ Component, pageProps }: AppProps) => {
  //THEME CONFIG
  const [theme, setTheme] = useState(darkTheme)
  function handleSetTheme() {
    if (theme === darkTheme) {
      setTheme(lightTheme)
    } else {
      setTheme(darkTheme)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <button
        name="Theme toggle button"
        className="themeChanger"
        onClick={handleSetTheme}
      >
        {theme === darkTheme ? (
          <Image src={sunIcon} alt="" height="50" width="50" />
        ) : (
          <Image src={moonIcon} alt="" height="50" width="50" />
        )}
      </button>

      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
