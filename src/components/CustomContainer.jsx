// MUI
import {Container} from "@mui/material";

const CustomContainer = ({children, ...restProps}) => {
    return <Container maxWidth="xl" disableGutters sx={{px: 1.5, py: 1}} {...restProps}>
        {children}
    </Container>
}

export default CustomContainer