
import {AppBar,Toolbar,styled} from '@mui/material';
import Logo from '../images/121212.jpg';
const StyledHeader = styled(AppBar)`
    background:#000
    `

const Header = () =>{
    return (
        
        <StyledHeader position="static">
            <Toolbar> 
            <img src={Logo} alt ="logo" style= {{height:300,width:1850}}/>
            </Toolbar>
        </StyledHeader>
    )
}
export default Header;