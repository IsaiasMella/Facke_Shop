import { Grid } from '@mui/material';
import Logo from '../../Images/FackeShop.png'
import React from 'react';
import Facebook from '../../Images/svg/RRSS/Facebook';
import Twitter from '../../Images/svg/RRSS/Twitter';
import Instagram from '../../Images/svg/RRSS/Instagram';
import Linkedin from '../../Images/svg/RRSS/Linkedin';
import Youtube from '../../Images/svg/RRSS/Youtube';
import Phone from '../../Images/svg/Phone';
export interface ContactInterface { }

const Contact: React.FC<ContactInterface> = () => {
	const colorRRSS = '#535C67'

	return (
		<Grid
			item
		>
			<Grid item sx={{ height: '80px' }} >
				<img alt='Logo' src={Logo} style={{ height: '100%' }} />
			</Grid>
			<Grid item style={{ color: '#6B737C' }} >
				<p>We sell custom products for all your needs. Packs and bulk products that you will enjoy.</p>
			</Grid>
			<Grid item display='flex' alignItems='center' gap='5px'>
				<Phone fill={'#000'} />
				<p style={{ fontWeight: '600' }} >+1-202-555-0129</p>
			</Grid>
			<Grid item display='flex' gap='8px' >
				<Facebook fill={colorRRSS} />
				<Twitter fill={colorRRSS} />
				<Instagram fill={colorRRSS} />
				<Linkedin fill={colorRRSS} />
				<Youtube fill={colorRRSS} />
			</Grid>
		</Grid>
	)
};

export default Contact;
