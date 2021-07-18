import BannerCard from "@components/common/banner-card";
import CategoryListCard from "@components/common/category-list-card";
import SellWithProgress from "@components/common/sale-with-progress";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import { useCategoriesQuery } from "@framework/category/get-all-categories";
import { useFlashSaleProductsQuery } from "@framework/product/get-all-flash-sale-products";
import { useWindowSize } from "@utils/use-window-size";
import { homeFourGridBanners as banners } from "@framework/static/banner";
import CategoryListCardLoader from "@components/ui/loaders/category-list-card-loader";
import Alert from "@components/ui/alert";

interface Props {
	className?: string;
}

const categoryResponsive = {
	"768": {
		slidesPerView: 3,
		spaceBetween: 14,
	},
	"480": {
		slidesPerView: 2,
		spaceBetween: 12,
	},
	"0": {
		slidesPerView: 1,
		spaceBetween: 12,
	},
};

const HeroWithCategoryFlash: React.FC<Props> = ({
	className = "mb-12 md:mb-14 xl:mb-16",
}) => {
	return (
		<div
			className={`grid grid-cols-1 lg:grid-cols-7 2xl:grid-cols-9 gap-5 xl:gap-7 lg:gap-y-14 ${className}`}
		>
			<CategoryListCardSection />

			<div className="col-span-full lg:col-span-5 xl:col-span-5 row-span-full lg:row-auto grid grid-cols-2 gap-2 md:gap-3.5 lg:gap-5 xl:gap-7">
				{banners.map((banner: any) => (
					<BannerCard
						key={`banner--key${banner.id}`}
						banner={banner}
						className={banner.type === "large" ? "col-span-2" : "col-span-1"}
					/>
				))}
			</div>

			<SellWithProgressCardSection />
		</div>
	);
};

// CategoryList section
export function CategoryListCardSection() {
	const { width } = useWindowSize();
	const { data, isLoading, error } = useCategoriesQuery({
		limit: 10,
	});

	return (
		<>
			{error ? (
				<div className="col-span-full lg:col-span-2">
					<Alert message={error?.message} />
				</div>
			) : width < 1025 ? (
				<div className="col-span-full">
					<Carousel breakpoints={categoryResponsive} buttonSize="small">
						{isLoading
							? Array.from({ length: 7 }).map((_, idx) => (
									<SwiperSlide key={idx}>
										<CategoryListCardLoader
											uniqueKey={`category-list-${idx}`}
										/>
									</SwiperSlide>
							  ))
							: data?.categories.data.map((category: any) => (
									<SwiperSlide key={`sm-category--key${category.id}`}>
										<CategoryListCard category={category} />
									</SwiperSlide>
							  ))}
					</Carousel>
				</div>
			) : (
				<div className="col-span-full lg:col-span-2 grid grid-cols-1 gap-3 justify-between">
					{isLoading
						? Array.from({ length: 7 }).map((_, idx) => (
								<CategoryListCardLoader
									key={idx}
									uniqueKey={`category-list-${idx}`}
								/>
						  ))
						: data?.categories.data
								.slice(0, 7)
								.map((category: any) => (
									<CategoryListCard
										key={`lg-category--key${category.id}`}
										category={category}
									/>
								))}
				</div>
			)}
		</>
	);
}

// ProgressCard section
export function SellWithProgressCardSection() {
	const { width } = useWindowSize();
	const { data, isLoading, error } = useFlashSaleProductsQuery({
		limit: 10,
	});

	return (
		<>
			{width < 1441 ? (
				<SellWithProgress
					products={data?.productFlashSellGridOne}
					className="col-span-full"
					loading={isLoading}
					error={error?.message}
				/>
			) : (
				<SellWithProgress
					products={data?.productFlashSellGridOne}
					productVariant="gridSlim"
					loading={isLoading}
					imgWidth={330}
					imgHeight={425}
					error={error?.message}
					className="col-span-full 2xl:col-span-2 2xl:row-auto xl:hidden 2xl:flex"
				/>
			)}
		</>
	);
}

export default HeroWithCategoryFlash;
