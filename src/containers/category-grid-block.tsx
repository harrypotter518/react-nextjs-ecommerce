import SectionHeader from "@components/common/section-header";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import CategoryCard from "@components/common/category-card";
import { useWindowSize } from "@utils/use-window-size";
import CategoryCardLoader from "@components/ui/loaders/category-card-loader";
import { useFeaturedCategoriesQuery } from "@framework/category/get-all-featured-categories";
import Alert from "@components/ui/alert";

interface CategoriesProps {
	sectionHeading: string;
	className?: string;
}

const breakpoints = {
	"1220": {
		slidesPerView: 4,
		spaceBetween: 28,
	},
	"800": {
		slidesPerView: 3,
		spaceBetween: 20,
	},
	"440": {
		slidesPerView: 2,
		spaceBetween: 20,
	},
	"0": {
		slidesPerView: 1,
		spaceBetween: 12,
	},
};

const CategoryGridBlock: React.FC<CategoriesProps> = ({
	sectionHeading = "text-section-title",
	className = "mb-12 md:mb-14 xl:mb-16",
}) => {
	const { width } = useWindowSize();
	const { data, isLoading, error } = useFeaturedCategoriesQuery({
		limit: 10,
	});

	return (
		<div className={className}>
			<SectionHeader sectionHeading={sectionHeading} />
			{error ? (
				<Alert message={error?.message} />
			) : (
				<>
					{width < 1025 ? (
						<div className="relative">
							<Carousel breakpoints={breakpoints}>
								{isLoading
									? Array.from({ length: 6 }).map((_, idx) => (
											<SwiperSlide key={idx}>
												<CategoryCardLoader
													uniqueKey={`featured-category-${idx}`}
												/>
											</SwiperSlide>
									  ))
									: data?.map((category) => (
											<SwiperSlide key={`category--key${category.id}`}>
												<CategoryCard category={category} />
											</SwiperSlide>
									  ))}
							</Carousel>
						</div>
					) : (
						<div className="lg:grid lg:grid-cols-3 lg:gap-5 xl:gap-7">
							{isLoading
								? Array.from({ length: 6 }).map((_, idx) => (
										<CategoryCardLoader
											key={idx}
											uniqueKey={`featured-category-${idx}`}
										/>
								  ))
								: data?.map((category) => (
										<CategoryCard
											key={`category--key${category.id}`}
											category={category}
										/>
								  ))}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default CategoryGridBlock;
