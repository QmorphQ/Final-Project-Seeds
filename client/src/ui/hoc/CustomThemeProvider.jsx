import { useTheme } from '@mui/material/styles';
import createCustomTheme from '../styles/theme';

const CustomThemeProvider = (props) => {
    const {children} = props;
    const theme = useTheme()
    const customTheme = createCustomTheme(theme)
    return (
        <ThemeProvider theme={customTheme}>
            {children}            
        </ThemeProvider>

    )
}