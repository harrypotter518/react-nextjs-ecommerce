import SectionHeader from "@components/common/section-header";
import ProductCard from "@components/product/product-card";
import ProductCardGridLoader from "@components/ui/loaders/product-card-grid-loader";
import { useFlashSaleProductsQuery } from "@framework/product/get-all-flash-sale-products";
import Alert from "@components/ui/alert";
import dynamic from "next/dynamic";
const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

interface ProductsProps {
	sectionHeading?: string;
	className?: string;
	date?: any;
}

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
	if (completed) {
		// Render a completed state
		return <span>Time Over!</span>;
	} else {
		// Render a countdown
		return (
			<div className="flex items-center space-s-1.5 md:space-s-2.5">
				<div className="text-heading text-10px md:text-xs text-center uppercase">
					<span className="bg-heading rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1">
						{days}
					</span>
					days
				</div>
				<div className="text-heading text-10px md:text-xs text-center uppercase">
					<span className="bg-heading rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1">
						{hours}
					</span>
					hours
				</div>
				<div className="text-heading text-10px md:text-xs text-center uppercase">
					<span className="bg-heading rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1">
						{minutes}
					</span>
					mins
				</div>
				<div className="text-heading text-10px md:text-xs text-center uppercase">
					<span className="bg-heading rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1">
						{seconds}
					</span>
					secs
				</div>
			</div>
		);
	}
};

const ProductsFlashSaleBlock: React.FC<ProductsProps> = ({
	sectionHeading = "text-flash-sale",
	className = "mb-12 md:mb-14 xl:mb-16",
	date = "2023-03-01T01:02:03",
}) => {
	const { data, isLoading, error } = useFlashSaleProductsQuery({
		limit: 10,
	});
	return (
		<div
			className={`${className} border border-gray-300 rounded-md pt-5 md:pt-6 lg:pt-7 pb-5 lg:pb-7 px-4 md:px-5 lg:px-7`}
		>
			<div className="flex justify-between items-center flex-wrap mb-5 md:mb-6">
				<SectionHeader sectionHeading={sectionHeading} className="mb-0" />
				<Countdown date={date} intervalDelay={1000} renderer={renderer} />
			</div>
			{error ? (
				<Alert message={error?.message} />
			) : (
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-4 lg:gap-y-5 xl:lg:gap-y-6 2xl:gap-y-8">
					{isLoading && data?.productFlashSellGridTwo?.length
						? Array.from({ length: 10 }).map((_, idx) => (
								<ProductCardGridLoader
									key={idx}
									uniqueKey={`flash-sale-${idx}`}
								/>
						  ))
						: data?.productFlashSellGridTwo?.map((product: any) => (
								<ProductCard
									key={`product--key${product.id}`}
									product={product}
									imgWidth={324}
									imgHeight={324}
									variant="gridSlim"
								/>
						  ))}
				</div>
			)}
		</div>
	);
};

export default ProductsFlashSaleBlock;
