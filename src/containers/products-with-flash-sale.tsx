import SellWithProgress from "@components/common/sale-with-progress";
import SectionHeader from "@components/common/section-header";
import ProductCard from "@components/product/product-card";
import { useWindowSize } from "@utils/use-window-size";
import { useFlashSaleProductsQuery } from "@framework/product/get-all-flash-sale-products";
import { useTopSellerProductsQuery } from "@framework/product/get-all-top-seller-products";
import ProductListFeedLoader from "@components/ui/loaders/product-list-feed-loader";
import Alert from "@components/ui/alert";

interface Props {
	className?: string;
	carouselBreakpoint?: {} | any;
}

const ProductsWithFlashSale: React.FC<Props> = ({
	className = "mb-12 md:mb-14 xl:mb-7",
	carouselBreakpoint,
}) => {
	const { width } = useWindowSize();
	const { data, isLoading, error } = useTopSellerProductsQuery({
		limit: 10,
	});

	const {
		data: flashSellProduct,
		isLoading: flashSellProductLoading,
	} = useFlashSaleProductsQuery({
		limit: 10,
	});

	return (
		<div
			className={`grid grid-cols-1 gap-5 md:gap-14 xl:gap-7 xl:grid-cols-7 2xl:grid-cols-9 ${className}`}
		>
			<div className="xl:col-span-5 2xl:col-span-7 border border-gray-300 rounded-lg pt-6 md:pt-7 lg:pt-9 xl:pt-7 2xl:pt-9 px-4 md:px-5 lg:px-7 pb-5 lg:pb-7">
				<SectionHeader
					sectionHeading="text-top-products"
					categorySlug="/search"
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 xl:gap-7 xl:-mt-1.5 2xl:mt-0">
					{error ? (
						<Alert message={error?.message} />
					) : isLoading && !data?.length ? (
						<ProductListFeedLoader limit={4} />
					) : (
						data?.map((product) => (
							<ProductCard
								key={`product--key${product.id}`}
								product={product}
								imgWidth={265}
								imgHeight={265}
								imageContentClassName="flex-shrink-0 w-32 sm:w-44 md:w-40 lg:w-52 2xl:w-56 3xl:w-64"
								contactClassName="ps-3.5 sm:ps-5 md:ps-4 xl:ps-5 2xl:ps-6 3xl:ps-10"
							/>
						))
					)}
				</div>
			</div>
			{width < 1280 ? (
				<SellWithProgress
					carouselBreakpoint={carouselBreakpoint}
					products={flashSellProduct?.productFlashSellGrid}
					loading={flashSellProductLoading}
					className="col-span-full xl:col-span-2 row-span-full xl:row-auto lg:mb-1 xl:mb-0"
				/>
			) : (
				<SellWithProgress
					carouselBreakpoint={carouselBreakpoint}
					products={flashSellProduct?.productFlashSellGrid}
					loading={flashSellProductLoading}
					productVariant="gridSlim"
					imgWidth={330}
					imgHeight={330}
					className="col-span-full xl:col-span-2 row-span-full xl:row-auto"
				/>
			)}
		</div>
	);
};

export default ProductsWithFlashSale;
