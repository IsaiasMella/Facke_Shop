import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { products } from '../../Api/products';
import { Products } from '../../Interfaces/Interfaces';
import { Cards } from '../Cards';
export interface RecomendationInterface {
	category: string
}

const Recomendation: React.FC<RecomendationInterface> = ({ category }) => {
	const [recomendation, setRecomendation] = useState<Products[]>()

	let limit = 4

	useEffect(() => {
		products.getByCategory({ category: category, limit: limit })
			.then(res => setRecomendation(res.data.products))
			.catch(err => console.error(err))
	}, [])
	return (
		<Box sx={{ width: '90%' }}>
			<h3>You might also like</h3>
			<Box sx={{ display: 'flex', gap: '16px' }}>
				{
					recomendation ?
						recomendation?.map(product => (
							<Cards
								key={product.id}
								img={product.images[0]}
								title={product.title}
								price={product.price}
								discountPercentage={product.discountPercentage}
								id={product.id}
								brand={product.brand}
								category={product.category}
							/>
						))
						:
						'sin recomendaciones'
				}
			</Box>
		</Box>
	)
};

export default Recomendation;
