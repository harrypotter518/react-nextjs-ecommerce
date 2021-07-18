import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import cn from "classnames";
import { useTranslation } from "next-i18next";
const instagramFeed = [
	{
		id: 1,
		title: "text-man",
		slug: "/#",
		image: "/assets/images/instagram/1.jpg",
	},
	{
		id: 2,
		title: "text-woman",
		slug: "/#",
		image: "/assets/images/instagram/2.jpg",
	},
	{
		id: 3,
		title: "text-watch",
		slug: "/#",
		image: "/assets/images/instagram/3.jpg",
	},
	{
		id: 4,
		title: "text-man",
		slug: "/#",
		image: "/assets/images/instagram/4.jpg",
	},
	{
		id: 5,
		title: "text-sports",
		slug: "/#",
		image: "/assets/images/instagram/5.jpg",
	},
	{
		id: 6,
		title: "text-fashion",
		slug: "/#",
		image: "/assets/images/instagram/6.jpg",
	},
];

interface Props {
	className?: string;
}
const Instagram: React.FC<Props> = ({ className = "" }) => {
	const { t } = useTranslation("common");
	return (
		<div
			className={cn(
				"grid grid-cols-3 md:grid-cols-6 gap-0.5 sm:gap-1 overflow-hidden rounded-md",
				className
			)}
		>
			{instagramFeed?.map((item) => (
				<a
					className="group flex justify-center text-center relative"
					href={item.slug}
					key={`instagram--key${item.id}`}
					target="_blank"
				>
					<Image
						src={item.image ?? "/assets/placeholder/instagram.svg"}
						alt={t(`${item.title}`) || t("text-instagram-thumbnail")}
						width={300}
						height={300}
						className="bg-gray-300 object-cover"
					/>
					<div className="absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
					<div className="absolute top left h-full w-full flex items-center justify-center">
						<FaInstagram className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl transform opacity-0 scale-400 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100" />
					</div>
				</a>
			))}
		</div>
	);
};

export default Instagram;
