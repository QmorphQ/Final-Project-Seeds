import { useTheme, ThemeProvider } from '@mui/material/styles';
import createCustomTheme from '../styles/theme';
import { ThemeProvider } from '@mui/material'; 


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

export default CustomThemeProvider;

