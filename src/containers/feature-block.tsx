import TextInformation from "@components/common/text-information";

const data = [
	{
		id: 1,
		icon: "/assets/images/feature/saving.svg",
		title: "feature-title-one",
		description: "feature-description-one",
	},
	{
		id: 2,
		icon: "/assets/images/feature/risk-free.svg",
		title: "feature-title-two",
		description: "feature-description-two",
	},
	{
		id: 3,
		icon: "/assets/images/feature/delivery.svg",
		title: "feature-title-three",
		description: "feature-description-three",
	},
	{
		id: 4,
		icon: "/assets/images/feature/product.svg",
		title: "feature-title-four",
		description: "feature-description-four",
	},
];

interface Props {
	className?: string;
}

const FeatureBlock: React.FC<Props> = ({
	className = "mb-12 md:mb-14 xl:mb-16",
}) => {
	return (
		<div
			className={`${className} bg-gray-200 feature-block-wrapper border border-gray-300 rounded-md w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-12 xl:gap-0 overflow-hidden py-12 xl:py-0 sm:px-4 md:px-8 lg:px-16 xl:px-0`}
		>
			{data?.map((item) => (
				<TextInformation item={item} key={item.id} />
			))}
		</div>
	);
};

export default FeatureBlock;
