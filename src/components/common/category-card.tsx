import Link from "next/link";
import Image from "next/image";
import Text from "@components/ui/text";
import { Category } from "@framework/types";
import { useTranslation } from "next-i18next";

interface Props {
	category: Category;
}

const CategoryCard: React.FC<Props> = ({ category }) => {
	const { name, products } = category;
	const { t } = useTranslation("common");
	return (
		<div className="flex flex-col border border-gray-300 rounded-lg p-4 lg:p-5 xl:p-7">
			<Text
				variant="heading"
				className="capitalize -mt-0.5 lg:-mt-1 xl:-mt-0 mb-2.5 lg:mb-3.5"
			>
				{name}
			</Text>
			<div className="grid grid-cols-3 gap-2.5 xl:gap-3">
				{products?.slice(0, 3)?.map((product) => (
					<Link href={`${product?.slug}`} key={`image--key${product?.id}`}>
						<a className="flex rounded-md overflow-hidden">
							<Image
								src={
									product?.image?.original ??
									"/assets/placeholder/products/product-cat.svg"
								}
								alt={name || t("text-category-thumbnail")}
								width={165}
								height={165}
								className="bg-gray-300 object-cover rounded-md transition duration-300 ease-in-out transform hover:scale-110"
							/>
						</a>
					</Link>
				))}
			</div>
		</div>
	);
};

export default CategoryCard;
