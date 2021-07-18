import Link from "@components/ui/link";
import Image from "next/image";
import usePrice from "@framework/product/use-price";
import { ROUTES } from "@utils/routes";

type SearchProductProps = {
	item: any;
};

const SearchProduct: React.FC<SearchProductProps> = ({ item }) => {
	const { price, basePrice } = usePrice({
		amount: item.sale_price ? item.sale_price : item.price,
		baseAmount: item.price,
		currencyCode: "USD",
	});
	return (
		<Link
			href={`${ROUTES.PRODUCT}/${item?.slug}`}
			className="group w-full h-auto flex justify-start items-center"
		>
			<div className="relative flex w-24 h-24 rounded-md overflow-hidden bg-gray-200 flex-shrink-0 cursor-pointer me-4">
				<Image
					src={
						item?.image?.original ?? "/assets/placeholder/search-product.svg"
					}
					width={96}
					height={96}
					loading="eager"
					alt={item.name || "Product Image"}
					className="bg-gray-200 object-cover"
				/>
			</div>
			<div className="flex flex-col w-full overflow-hidden">
				<h3 className="truncate text-sm text-heading mb-2">{item.name}</h3>
				<div className="text-heading font-semibold text-sm">
					{price}
					<del className="ps-2 text-gray-400 font-normal">{basePrice}</del>
				</div>
			</div>
		</Link>
	);
};

export default SearchProduct;
