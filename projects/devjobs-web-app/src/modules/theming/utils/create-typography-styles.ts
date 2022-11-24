import {css} from 'styled-components';
import {Theme} from '~theming/types/theme';

export const createTypographyStyles =
  (typographyKey: Exclude<keyof Theme['typography'], 'fontFamily'>) =>
  ({theme}: {theme: Theme}) =>
    css`
      font-size: ${theme.typography[typographyKey].fontSize};
      font-weight: ${theme.typography[typographyKey].fontWeight};
      line-height: ${theme.typography[typographyKey].lineHeight};
    `;
