import Image from "next/image";
import Text from "@components/ui/text";
import Button from "@components/ui/button";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import cn from "classnames";
import { useTranslation } from "next-i18next";
const data = {
	title: "support-heading",
	description: "support-sub-heading",
	buttonText: "button-chat-services",
	supportImage: "/assets/images/support.png",
};

interface Props {
	className?: string;
}

const Support: React.FC<Props> = ({ className }) => {
	const { title, description, supportImage, buttonText } = data;
	const { t } = useTranslation("common");
	return (
		<div
			className={cn(
				"my-8 md:my-12 lg:my-16 xl:my-20 3xl:my-24 pb-5 lg:pb-3.5 2xl:pb-5 pt-3 lg:pt-1.5 2xl:pt-2 3xl:pt-3 text-center",
				className
			)}
		>
			<div className="max-w-md mx-auto mb-4 md:mb-5 xl:mb-8 2xl:mb-10 3xl:mb-12">
				<Text variant="mediumHeading" className="mb-2 md:mb-3 lg:mb-3.5">
					{t(`${title}`)}
				</Text>
				<p className="text-body text-xs md:text-sm leading-6 md:leading-7">
					{t(`${description}`)}
				</p>
			</div>
			<div className="mb-2.5 md:mb-0 xl:mb-2 2xl:mb-4 3xl:mb-6 md:px-20 lg:px-40 xl:px-0">
				<Image
					src={supportImage}
					alt={t("text-support-thumbnail")}
					width={870}
					height={300}
				/>
			</div>
			<Button>
				{t(`${buttonText}`)}
				<IoChatbubbleEllipsesOutline className="ms-2 text-lg md:text-xl" />
			</Button>
		</div>
	);
};

export default Support;
