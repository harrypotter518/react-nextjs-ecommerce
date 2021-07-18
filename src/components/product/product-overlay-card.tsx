import Image from "next/image";
import { useUI } from "@contexts/ui.context";
import usePrice from "@framework/product/use-price";
import { Product } from "@framework/types";

interface ProductProps {
	product: Product;
	index: number;
	imgLoading?: "eager" | "lazy";
	variant?: "left" | "center";
}

const ProductOverlayCard: React.FC<ProductProps> = ({
	product,
	index,
	variant = "left",
	imgLoading = "lazy",
}) => {
	const size =
		(variant === "center" && index === 1) || (variant === "left" && index === 0)
			? 620
			: 260;
	const classes =
		(variant === "center" && index === 1) || (variant === "left" && index === 0)
			? "row-span-full lg:row-span-2 col-span-full lg:col-span-2"
			: "col-span-2 lg:col-span-1";

	const { openModal, setModalView, setModalData } = useUI();
	const { price, basePrice, discount } = usePrice({
		amount: product.sale_price ? product.sale_price : product.price,
		baseAmount: product.price,
		currencyCode: "USD",
	});
	function handlePopupView() {
		setModalData({ data: product });
		setModalView("PRODUCT_VIEW");
		return openModal();
	}

	return (
		<div
			onClick={handlePopupView}
			className={`${classes} cursor-pointer group flex flex-col bg-gray-200 rounded-md relative items-center justify-between overflow-hidden`}
		>
			<div
				className="flex justify-center items-center p-4 h-full 3xl:min-h-[330px]"
				title={product?.name}
			>
				<Image
					src={
						product?.image?.original ??
						"/assets/placeholder/products/product-featured.png"
					}
					width={size}
					height={size}
					loading={imgLoading}
					alt={product?.name || "Product Image"}
					className="transition duration-500 ease-in-out transform group-hover:scale-110"
				/>
			</div>
			{discount && (
				<span className="absolute top-3.5 md:top-5 3xl:top-7 start-3.5 md:start-5 3xl:start-7 bg-heading text-white text-10px md:text-sm leading-5 rounded-md inline-block px-2 xl:px-3 pt-0.5 pb-1">
					{discount}
				</span>
			)}

			<div
				className="flex flex-col md:flex-row lg:flex-col 2xl:flex-row md:justify-between md:items-center lg:items-start 2xl:items-center w-full px-4 md:px-5 3xl:px-7 pb-4 md:pb-5 3xl:pb-7"
				title={product?.name}
			>
				<div className="md:pe-2 lg:pe-0 2xl:pe-2 overflow-hidden">
					<h2 className="text-heading font-semibold text-sm md:text-base xl:text-lg mb-1 truncate">
						{product?.name}
					</h2>
					<p className="text-body text-xs xl:text-sm leading-normal xl:leading-relaxed truncate max-w-[250px]">
						{product?.description}
					</p>
				</div>
				<div className="flex-shrink-0 flex flex-row-reverse md:flex-col lg:flex-row-reverse 2xl:flex-col items-center md:items-end lg:items-start 2xl:items-end justify-end md:text-end lg:text-start xl:text-end mt-2 md:-mt-0.5 lg:mt-2 2xl:-mt-0.5">
					{discount && (
						<del className="text-sm md:text-base lg:text-sm xl:text-base 3xl:text-lg">
							{basePrice}
						</del>
					)}
					<div className="text-heading font-segoe font-semibold text-base md:text-xl lg:text-base xl:text-xl 3xl:text-2xl 3xl:mt-0.5 pe-2 md:pe-0 lg:pe-2 2xl:pe-0">
						{price}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductOverlayCard;
