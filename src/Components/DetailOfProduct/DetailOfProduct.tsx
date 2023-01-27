import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddCart from '../../Images/svg/AddCart';
import RemoveCart from '../../Images/svg/RemoveCart';
import { Products } from '../../Interfaces/Interfaces';
import { useAppDispatch } from '../../Redux/Hooks';
import { addToCart, deleteFromCart } from '../../Redux/Slices/CartSlice';
import { getItem, setItem } from '../../Utils/localStorage';

export interface DetailOfProductInterface {
	data: Products
}

const DetailOfProduct: React.FC<DetailOfProductInterface> = ({ data }) => {
	const [disabledBtn, setDisabledBtn] = useState(false)
	const dispatch = useAppDispatch()

	const handleAddToCart = () => {
		let img = data?.images[0]
		const { title, price, discountPercentage, id, brand, category } = data
		dispatch(addToCart({ img, title, price, discountPercentage, id, brand, category }))
		setDisabledBtn(true)

		handleLocalStorage()
	}

	const handleRemoveToCart = () => {
		let id = data.id
		dispatch(deleteFromCart({ id }))
		setDisabledBtn(false)
	}

	const handleLocalStorage = () => {
		let items = getItem('CART')
		setItem('CART', { ...items, data })
	}

	return (
		<Grid item sx={{ mt: '35px', ml: '80px', mb: '15px' }} >
			<h2 >{data && data?.title}</h2>
			{
				data ? <>
					<h4 >{data ? `$${data?.price}` : ''}</h4>
					<small >En <span>{`12 cuotas de $${((data.price) / 12).toFixed(2)} sin interes`}</span></small>
				</> : ''
			}
			<Grid container direction='column' gap='5px' sx={{ mt: '10px', mb: '30px' }} >
				<div >
					{/* <Box stroke='var(--green)' fill='var(--green)' /> */}
					<small>envio gratis</small>
				</div>

				<div >
					{/* <Shield stroke='var(--green)' /> */}
					<small>Compra protegida por Facke Shop</small>
				</div>
			</Grid>

			<Grid container direction='column' gap='15px' sx={{ marginLeft: '20px' }} >
				<Button disabled={disabledBtn} variant='contained' onClick={handleAddToCart} sx={{ gap: '10px' }}>
					<AddCart stroke='#fff' />
					Add to Cart
				</Button>
				<Button disabled={!disabledBtn} variant='outlined' onClick={handleRemoveToCart} sx={{ gap: '5px' }}>
					<RemoveCart stroke='#3A4451' />
					Remove from Cart
				</Button>
			</Grid>
		</Grid>
	)
};

export default DetailOfProduct;
