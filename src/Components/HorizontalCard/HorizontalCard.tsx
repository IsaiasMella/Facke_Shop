import React, { useEffect, useState } from 'react';
import { FormControl, Grid, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Box from '@mui/material/Box';
import { useAppDispatch } from '../../Redux/Hooks';
import { deleteFromCart } from '../../Redux/Slices/CartSlice';

export interface HorizontalCardInterface {
	id: number
	img: string
	price: number
	title: string
	brand: string
	category: string
	countTotalProducts: (product: number, id: number) => void
}

const HorizontalCard: React.FC<HorizontalCardInterface> = ({ id, img, price, title, brand, category, countTotalProducts }) => {
	let quantity = [1, 10, 20, 30, 40, 50]

	const [totalProduct, setTotalProduct] = useState(0)
	const [quantityValue, setQuantityValue] = useState('1')

	const dispatch = useAppDispatch()

	const handleRemoveToCart = () => {
		dispatch(deleteFromCart({ id }))
	}
	
	useEffect(() => {
		setTotalProduct(price * parseInt(quantityValue))
	}, [quantityValue])

	if (totalProduct !== 0) {
		countTotalProducts(totalProduct, id)
	}
	
	const handleChange = (e: SelectChangeEvent): void => {
		setQuantityValue(e.target.value);
	};

	return (
		<Grid container sx={{ mt: '24px', display: 'flex', width: '100%' }}>
			<Grid container sx={{ justifyContent: 'space-between' }}>
				<Grid item sx={{ display: 'flex', gap: '16px' }}>
					<Grid item sx={{ width: '120px', height: '120px', overflow: 'hidden' }}>
						<img
							style={{ width: '120px', height: '120px', objectFit: 'contain' }}
							src={img}
							alt={title} />
					</Grid>
					<Grid item sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
						<h4 style={{ margin: '0' }}>{title}</h4>
						<Box sx={{ display: 'flex', alignItems: 'center', margin: '0', gap: '10px' }}>
							<p style={{ margin: '0', fontWeight: '700' }}>Quantity: </p>
							<FormControl variant="standard" sx={{ m: 1, minWidth: 30, margin: '0' }}>
								<Select
									labelId="demo-simple-select-standard-label"
									id="demo-simple-select-standard"
									value={quantityValue}
									onChange={handleChange}
									label=""
								>
									{quantity.map(value => <MenuItem key={value} value={value}>{value}</MenuItem>)}
								</Select>
							</FormControl>
						</Box>
						<Box sx={{ margin: '0' }}>
							<ul style={{ margin: '0' }}>
								<li style={{ fontWeight: '700' }}>Brand: "{brand}"</li>
								<li style={{ fontWeight: '700' }}>Category: "{category}"</li>
							</ul>
						</Box>
						<p style={{ fontWeight: '700', cursor:'pointer' }} onClick={handleRemoveToCart}>Remove</p>
					</Grid>
				</Grid>
				<Grid item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
					<p style={{ margin: '0', fontWeight: '700' }} >${price}</p>
					<p style={{ margin: '0', fontWeight: '600' }} >Total: <span style={{ fontWeight: '700' }}>${totalProduct}</span></p>
				</Grid>
			</Grid>
			<hr style={{ width: '100%', color: '#000', margin: '0' }} />
		</Grid>
	)
};

export default HorizontalCard;
