import React, { useEffect, useState } from 'react';
import {
	Grid,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
}
	from '@mui/material';
import AddCart from '../../Images/svg/AddCart';
import RemoveCart from '../../Images/svg/RemoveCart';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Redux/Hooks';
import { addToCart, deleteFromCart } from '../../Redux/Slices/CartSlice';
import { setItem } from '../../Utils/localStorage';

export interface CardsInterface {
	img: string
	title: string
	price: number
	discountPercentage: number
	id: number
	brand: string
	category: string
}

const Cards: React.FC<CardsInterface> = ({ img, title, price, discountPercentage, id, brand, category }) => {
	const [priceMinimun, setPriceMinimun] = useState<number>(0)
	const [disabledBtn, setDisabledBtn] = useState(false)
	const dispatch = useAppDispatch()

	let itemExist = useAppSelector(state => state.cartReducer)

	const handleAddToCart = () => {
		dispatch(addToCart({ img, title, price, discountPercentage, id,brand,category }))
	}

	const handleRemoveToCart = () => {
		dispatch(deleteFromCart({ id }))
	}

	useEffect(() => {
		let minPrice = price - (price / discountPercentage)
		setPriceMinimun(minPrice)
	}, [])

	useEffect(() => {
		setDisabledBtn(itemExist.some(item => item.id === id))
		setItem('CART',itemExist)
	}, [itemExist, id])

	return (
		<Card
			sx={{ width: 336, height: 394, cursor: 'pointer' }}
		>
			<Link to={`/${id}`} style={{ textDecoration: 'none', color: '#091625' }}>
				<CardMedia
					sx={{ objectFit: 'contain' }}
					component="img"
					height="194"
					image={img}
					alt="Paella dish"
				/>
				<CardContent sx={{ width: '80%' }}>
					<h4 style={{ marginTop: '0px', fontWeight: '700', fontSize: '16px', lineHeight: '16px', color: '#000000' }} >
						{title}
					</h4>
					<Grid container justifyContent='space-between'>
						<Grid item>
							<span style={{ fontWeight: '600' }}>${priceMinimun.toFixed(2)} - ${price}</span>
						</Grid>
						<Grid item>
							<small style={{ color: '#6B737C' }} >Minimum: </small>
							<span >24</span>
						</Grid>
					</Grid>
				</CardContent>
			</Link>
			<CardActions disableSpacing style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
				<IconButton disabled={disabledBtn} onClick={handleAddToCart} aria-label="add to favorites">
					<AddCart stroke={`${disabledBtn ? '#E6E8E9' : '#3A4451'}`} />
				</IconButton>
				<IconButton disabled={!disabledBtn} onClick={handleRemoveToCart} aria-label="share">
					<RemoveCart stroke={`${disabledBtn ? '#3A4451' : '#E6E8E9'}`} />
				</IconButton>
			</CardActions>
		</Card >
	)
};

export default Cards;
