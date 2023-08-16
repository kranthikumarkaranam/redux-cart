import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
	{
		id: 1,
		title: 'Wireless Bluetooth Headphones',
		price: 59.99,
		description:
			'Experience high-quality sound with these wireless Bluetooth headphones. They feature noise cancellation technology and a comfortable over-ear design.',
	},

	{
		id: 2,
		title: 'Smartphone Mount for Car',
		price: 19.99,
		description:
			"Keep your smartphone within easy reach while driving with this convenient car mount. It's compatible with most smartphones and features a secure grip.",
	},
	{
		id: 3,
		title: 'Stainless Steel Water Bottle',
		price: 24.95,
		description:
			'Stay hydrated on the go with this insulated stainless steel water bottle. It keeps your beverages hot or cold for hours and comes in various colors.',
	},
	{
		id: 4,
		title: 'Fitness Tracker Watch',
		price: 79.99,
		description:
			"Monitor your daily activity, heart rate, and receive notifications with this sleek fitness tracker watch. It's water-resistant and has a long battery life.",
	},
];

const Products = () => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((product) => (
					<ProductItem
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
