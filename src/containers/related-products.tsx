import SectionHeader from "@components/common/section-header";
import ProductCard from "@components/product/product-card";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { useRelatedProductsQuery } from "@framework/product/get-related-product";
import Alert from "@components/ui/alert";

interface ProductsProps {
	sectionHeading: string;
	className?: string;
}

const RelatedProducts: React.FC<ProductsProps> = ({
	sectionHeading,
	className = "mb-9 lg:mb-10 xl:mb-14",
}) => {
	const { data, isLoading, error } = useRelatedProductsQuery({
		limit: 10,
	});

	return (
		<div className={className}>
			<SectionHeader sectionHeading={sectionHeading} />
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
				{error ? (
					<div className="col-span-full">
						<Alert message={error?.message} />
					</div>
				) : isLoading ? (
					<ProductFeedLoader limit={5} uniqueKey="related-product" />
				) : (
					data?.map((product: any) => (
						<ProductCard
							key={`product--key${product.id}`}
							product={product}
							imgWidth={340}
							imgHeight={440}
							variant="grid"
						/>
					))
				)}
			</div>
		</div>
	);
};

export default RelatedProducts;
