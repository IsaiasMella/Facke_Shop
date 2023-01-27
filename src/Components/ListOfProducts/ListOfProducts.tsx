import { Grid, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Products } from '../../Interfaces/Interfaces';
import { Cards } from '../Cards';
export interface ListOfProductsInterface {
	allProducts: Products[]
	setPagination: React.Dispatch<React.SetStateAction<number>>
	pages: number
}

const ListOfProducts: React.FC<ListOfProductsInterface> = ({ allProducts, setPagination, pages }) => {
	const [cantPages, setCantPages] = useState(pages)

	const handlePagination = (event: React.ChangeEvent<unknown>, value: number) => {
		if (value === 1) {
			setPagination(0)
		} else {
			setPagination(allProducts.length * (value - 1))
		}
	}
	useEffect(() => {
		if (pages >= 20) {
			setCantPages(Math.ceil(pages / 20))
		} else {
			setCantPages(1)
		}

	}, [allProducts])


	return (
		<>
			<Grid container sx={{ width: '90%', margin: '0 auto', justifyContent: 'center', gap: '25px' }}>
				{
					allProducts &&
					allProducts.map(product => (
						<Grid item key={product.id}>
							<Cards
								img={product.images[0]}
								title={product.title}
								price={product.price}
								discountPercentage={product.discountPercentage}
								id={product.id}
								brand={product.brand}
								category={product.category}
							/>
						</Grid>
					))
				}
			</Grid>
			<Pagination
				sx={{ alignSelf: 'center', mb: '50px' }}
				count={cantPages}
				color="primary"
				onChange={handlePagination} />
		</>
	)
};

export default ListOfProducts;
