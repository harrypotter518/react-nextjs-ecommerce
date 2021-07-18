import Link from "next/link";
import Image from "next/image";
import { Brand } from "@framework/types";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";

const BrandCard: React.FC<{ brand: Brand }> = ({ brand }) => {
	const { slug, name, background_image, image } = brand;
	const { t } = useTranslation("common");
	return (
		<Link
			href={{
				pathname: ROUTES.SEARCH,
				query: { brand: slug },
			}}
		>
			<a className="group flex justify-center text-center relative overflow-hidden rounded-md">
				<Image
					src={background_image?.original ?? "/assets/placeholder/brand-bg.svg"}
					alt={name || t("text-brand-thumbnail")}
					width={428}
					height={428}
					className="rounded-md object-cover transform transition-transform ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
				/>
				<div className="absolute top left bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
				<div className="absolute top left h-full w-full flex items-center justify-center p-8">
					<img
						src={image?.original}
						alt={name || t("text-brand-thumbnail")}
						className="flex-shrink-0"
					/>
				</div>
			</a>
		</Link>
	);
};

export default BrandCard;
