import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HorizontalCard } from '../../Components/HorizontalCard';
import { Recomendation } from '../../Components/Recomendation';
import { useAppSelector } from '../../Redux/Hooks';
import { TotalCart } from './TotalCart';

export interface ShoppingInterface { }

type ProductsInCart = {
	price: number
	id: number
}

const Shopping: React.FC<ShoppingInterface> = () => {
	window.scrollTo(0, 0)
	const [totalCart, setTotalCart] = useState<number>(0)
	const totalProducts: ProductsInCart[] = []
	const navigate = useNavigate();

	let itemExist = useAppSelector(state => state.cartReducer)
	let total = 0

	if (itemExist.length === 0) {
		navigate("/");
	}

	function countTotalProducts(product: number, id: number) {
		if (totalProducts.find(item => item.id === id)) {
			totalProducts.filter(prod => {
				if (prod.id === id) {
					prod.price = product
					total = totalProducts.reduce((acum, current) => acum + current.price, 0)
				}
			})
		} else {
			totalProducts.push({ price: product, id: id })
			total = totalProducts.reduce((acum, current) => acum + current.price, 0)
		}
		setTotalCart(total)
	}

	return (
		<Box sx={{ width: '100%', display: 'flex', placeItems: 'center', flexDirection: 'column' }}>
			<Box sx={{ display: 'flex', justifyContent: 'center', gap: '24px', width: '90%' }}>
				<Box sx={{ width: '75%' }}>
					<h3>Your Cart ({itemExist.length})</h3>
					{
						itemExist.length > 0 ?
							itemExist.map(item =>
								<HorizontalCard
									key={item.id}
									id={item.id}
									img={item.img}
									price={item.price}
									title={item.title}
									brand={item.brand}
									category={item.category}
									countTotalProducts={countTotalProducts}
								/>) :
							'No hay Productos en el Carrito'
					}
				</Box>
				<TotalCart totalCart={totalCart} totalItems={itemExist.length} />
			</Box>
			<Recomendation category={itemExist[0].category} />
		</Box>
	)
};

export default Shopping;
