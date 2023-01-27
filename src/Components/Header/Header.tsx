import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import Logo from '../../Images/FackeShop.png'
export interface HeaderInterface {
	imagePrincipal: string | undefined
}

const Header: React.FC<HeaderInterface> = ({ imagePrincipal }) => {

	return (
		<Grid container sx={{justifyContent:'center', height:'100vh', alignItems:'center', mt:'30px'}} >
			<Grid item sx={{display:'flex', flexDirection:'column',gap:'50px'}}  >
				<Box >
					<img src={Logo} alt='FackeShop' />
				</Box>
			</Grid>

			<picture className="hero__picture" >
				{
					imagePrincipal ?
					<img src={imagePrincipal} alt="principal product" />:''
				}
			</picture>
		</Grid>
	)
};

export default Header;
