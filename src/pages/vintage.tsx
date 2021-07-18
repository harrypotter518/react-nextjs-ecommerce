import BannerCard from "@components/common/banner-card";
import Container from "@components/ui/container";
import BrandBlock from "@containers/brand-block";
import CategoryBlock from "@containers/category-block";
import CategoryGridBlock from "@containers/category-grid-block";
import Layout from "@components/layout/layout";
import BannerWithProducts from "@containers/banner-with-products";
import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
import Divider from "@components/ui/divider";
import DownloadApps from "@components/common/download-apps";
import Support from "@components/common/support";
import Instagram from "@components/common/instagram";
import ProductsFlashSaleBlock from "@containers/product-flash-sale-block";
import ProductsFeatured from "@containers/products-featured";
import BannerSliderBlock from "@containers/banner-slider-block";
import ExclusiveBlock from "@containers/exclusive-block";
import HeroWithCategoryFlash from "@containers/hero-with-category-flash";
import Subscription from "@components/common/subscription";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { homeFourBanner as banner } from "@framework/static/banner";

export default function Home() {
	return (
		<>
			<Container>
				<HeroWithCategoryFlash />
			</Container>
			<BannerSliderBlock />
			<Container>
				<CategoryBlock sectionHeading="text-shop-by-category" />
				<BannerWithProducts
					sectionHeading="text-on-selling-products"
					categorySlug="/search"
					variant="reverse"
				/>
				<BannerCard
					banner={banner[0]}
					className="mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
				/>
				<ProductsFeatured
					sectionHeading="text-featured-products"
					variant="center"
				/>
				<BannerCard
					banner={banner[1]}
					className="mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
				/>
				<ProductsFlashSaleBlock date={"2023-03-01T01:02:03"} />
				<BrandBlock sectionHeading="text-top-brands" />
				<ExclusiveBlock />
				<NewArrivalsProductFeed />
				<BannerCard
					banner={banner[2]}
					className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
				/>
				<CategoryGridBlock sectionHeading="text-featured-categories" />
				<DownloadApps />
				<Support />
				<Instagram />
				<Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" />
			</Container>
			<Divider className="mb-0" />
		</>
	);
}

Home.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
	};
};
