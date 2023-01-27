import { Container, Grid } from '@mui/material';
import React from 'react';
import { Contact } from '../../Components/Contact';
import { Region } from './Region';
export interface FooterInterface { }

const Footer: React.FC<FooterInterface> = () => (
	<Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
		<Grid
			container
			display='grid'
			gridTemplateColumns='1.5fr 3.5fr'
			sx={{ pl: '5.75%', pt: '5%', width: '95%', gap: '80px' }}
		>
			<Contact />
			<Grid
				container
				direction='column'
				display='grid'
				gridTemplateColumns='1fr 1fr 1fr'
				justifyContent='space-between'
			>
				<Grid
					item
				>
					<h5 style={{ fontSize: '16px' }} >Our company</h5>
					<p style={{ fontSize: '15px' }}>About us</p>
					<p style={{ fontSize: '15px' }}>FAQ</p>
					<p style={{ fontSize: '15px' }}>Partnerships</p>
					<p style={{ fontSize: '15px' }}>Sustainability</p>
					<p style={{ fontSize: '15px' }}>Blog</p>
				</Grid>
				<Grid
					item
				>
					<h5 style={{ fontSize: '16px' }}>How can we help</h5>
					<p style={{ fontSize: '15px' }}>Place a ticket</p>
					<p style={{ fontSize: '15px' }}>Track your order</p>
					<p style={{ fontSize: '15px' }}>Help center</p>
				</Grid>
				<Grid
					item
				>
					<h5 style={{ fontSize: '16px' }}>Information</h5>
					<p style={{ fontSize: '15px' }}>Contact us</p>
					<p style={{ fontSize: '15px' }}>Live chat</p>
					<p style={{ fontSize: '15px' }}>Privacy</p>
					<p style={{ fontSize: '15px' }}>Term of use</p>
				</Grid>
			</Grid>
		</Grid>
		<Grid container sx={{ pl: '5.75%', width: '95%' }} justifyContent='space-between'>
			<Grid item><p style={{ color: '#535C67' }}>© 2022 Customer Products. All rights reserved.</p></Grid>
			<Grid item display='flex' gap='15px'>
				<Region />
			</Grid>
		</Grid>
	</Container>
);

export default Footer;
