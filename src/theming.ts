import { Theme } from '@mui/material';
import createTheme from '@mui/material/styles/createTheme';

import styles from '@/assets/scss/abstract/_variables.module.scss';

const theme: Theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif', 'system-ui'].join(','),
  },
  palette: {
    mode: 'light',
    primary: {
      main: styles.primary,
    },
    secondary: {
      main: styles.secondary,
    },
  },
  breakpoints: {
    values: {
      xs: Number(styles.xs),
      sm: Number(styles.sm),
      md: Number(styles.md),
      lg: Number(styles.lg),
      xl: Number(styles.xl),
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
});

export default theme;
