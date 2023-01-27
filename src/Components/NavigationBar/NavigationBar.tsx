import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
export interface NavigationBarInterface { }

const LinkStyle ={
	textDecoration:'none',
	color:'#535C67',
	fontSize:'15px'
}

const NavigationBar: React.FC<NavigationBarInterface> = () => {
	return (
		<Box sx={{ mt: '88px', height: '64px', background: '#E6E8E9', display: 'flex', alignItems: 'center' }}>
			<Box sx={{display:'flex',gap:'35px', ml:'92px'}}>
				<Link to={'/products'} style={LinkStyle} >All products</Link>
				<Link to={'/'} style={LinkStyle} >Packaging</Link>
				<Link to={'/'} style={LinkStyle} >Drinkware</Link>
				<Link to={'/'} style={LinkStyle} >Apparel</Link>
				<Link to={'/'} style={LinkStyle} >Notebooks</Link>
				<Link to={'/'} style={LinkStyle} >Backpacks</Link>
			</Box>
		</Box>
	)
};

export default NavigationBar;
