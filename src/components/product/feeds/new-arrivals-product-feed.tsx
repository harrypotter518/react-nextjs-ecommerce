import ProductsBlock from "@containers/products-block";
import { useNewArrivalProductsQuery } from "@framework/product/get-all-new-arrival-products";

export default function NewArrivalsProductFeed() {
	const { data, isLoading, error } = useNewArrivalProductsQuery({
		limit: 10,
	});

	return (
		<ProductsBlock
			sectionHeading="text-new-arrivals"
			products={data}
			loading={isLoading}
			error={error?.message}
			uniqueKey="new-arrivals"
		/>
	);
}
