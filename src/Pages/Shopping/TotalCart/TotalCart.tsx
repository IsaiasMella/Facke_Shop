import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface TotalCartInterface {
	totalCart: number
	totalItems: number
}

const TotalCart: React.FC<TotalCartInterface> = ({ totalCart, totalItems }) => {

	return (
		<Box sx={{ width: '20%' }}>
			<h3>Order Summary</h3>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<small style={{ color: '#6B737C' }} >Number of items</small>
				<small style={{ color: '#6B737C' }} >{totalItems}</small>
			</Box>
			<hr style={{ color: '#E6E8E9' }} />
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<p><b>Total:</b></p>
				<p style={{ fontSize: '24px', fontWeight: '700' }}>${totalCart}</p>
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
				<Button fullWidth variant='contained'>Proceed to Checkout</Button>
				<Button fullWidth variant='outlined'>
					<Link to='/' style={{ textDecoration: 'none', color: '#3A4451', fontSize: '16px' }}>
						Continue shopping
					</Link>
				</Button>
			</Box>
		</Box>
	)
};

export default TotalCart;
