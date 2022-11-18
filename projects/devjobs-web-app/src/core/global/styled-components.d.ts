import 'styled-components';
import {Theme} from '~theming/types/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
