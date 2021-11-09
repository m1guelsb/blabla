/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

import lightTheme from './themes/lightTheme'

export type Theme = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
