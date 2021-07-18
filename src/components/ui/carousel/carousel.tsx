import React, { useRef } from "react";
import { Swiper } from "swiper/react";
import { useRouter } from "next/router";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NavigationOptions } from "swiper/types/components/navigation";
import "swiper/swiper-bundle.min.css";
import { getDirection } from "@utils/get-direction";

SwiperCore.use([Navigation, Pagination, Autoplay]);

type CarouselPropsType = {
	className?: string;
	buttonClassName?: string;
	buttonSize?: "default" | "small";
	paginationVariant?: "default" | "circle";
	centeredSlides?: boolean;
	breakpoints?: {} | any;
	pagination?: {} | any;
	navigation?: {} | any;
	autoplay?: {} | any;
};

const Carousel: React.FunctionComponent<CarouselPropsType> = ({
	children,
	className = "",
	buttonClassName = "",
	buttonSize = "default",
	paginationVariant = "default",
	breakpoints,
	autoplay = {
		delay: 4000,
	},
	...props
}) => {
	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);
	const { locale } = useRouter();
	const dir = getDirection(locale);
	return (
		<div
			className={`carouselWrapper relative ${className} ${
				paginationVariant === "circle" ? "dotsCircle" : ""
			}`}
		>
			<Swiper
				loop={true}
				autoplay={autoplay}
				breakpoints={breakpoints}
				dir={dir}
				navigation={{
					prevEl: prevRef.current ? prevRef.current : undefined,
					nextEl: nextRef.current ? nextRef.current : undefined,
				}}
				onInit={(swiper: SwiperCore): void => {
					const navigation = swiper.params.navigation as NavigationOptions;
					navigation.prevEl = prevRef.current;
					navigation.nextEl = nextRef.current;
					swiper.navigation.update();
				}}
				{...props}
			>
				{children}
			</Swiper>
			<div className="flex items-center w-full absolute top-2/4 z-10">
				<button
					ref={prevRef}
					aria-label="prev-button"
					className={`${buttonClassName} ${
						buttonSize === "default"
							? "w-7 h-7 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl"
							: "w-7 h-7 md:w-7 md:h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg"
					} text-black flex items-center justify-center rounded-full text-gray-0 bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none start-0 transform ${
						dir === "rtl"
							? "rotate-180 shadow-navigationReverse translate-x-1/2"
							: "shadow-navigation -translate-x-1/2"
					}`}
				>
					<IoIosArrowBack />
				</button>
				<button
					ref={nextRef}
					aria-label="next-button"
					className={`${buttonClassName} ${
						buttonSize === "default"
							? "w-7 h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl"
							: "w-7 h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg"
					} text-black flex items-center justify-center rounded-full bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none end-0 transform ${
						dir === "rtl"
							? "rotate-180 shadow-navigationReverse -translate-x-1/2"
							: "shadow-navigation translate-x-1/2"
					}`}
				>
					<IoIosArrowForward />
				</button>
			</div>
		</div>
	);
};

export default Carousel;
