import 'styled-components';
import {Theme} from 'themes/types/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
