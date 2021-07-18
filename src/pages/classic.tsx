import BannerCard from "@components/common/banner-card";
import Container from "@components/ui/container";
import BrandGridBlock from "@containers/brand-grid-block";
import CategoryBlock from "@containers/category-block";
import Layout from "@components/layout/layout";
import BannerWithProducts from "@containers/banner-with-products";
import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
import BannerBlock from "@containers/banner-block";
import Divider from "@components/ui/divider";
import DownloadApps from "@components/common/download-apps";
import Support from "@components/common/support";
import Instagram from "@components/common/instagram";
import ProductsFeatured from "@containers/products-featured";
import BannerSliderBlock from "@containers/banner-slider-block";
import ExclusiveBlock from "@containers/exclusive-block";
import ProductsFlashSaleBlock from "@containers/product-flash-sale-block";
import Subscription from "@components/common/subscription";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// All data file
import {
	bannerDataOne,
	bannerDataTwo,
	homeFiveBanner as banner,
} from "@framework/static/banner";

export default function Home() {
	return (
		<>
			<ExclusiveBlock className="mb-12 md:mb-14 xl:mb-16 px-2.5 mx-auto max-w-[1920px]" />
			<Container>
				<CategoryBlock sectionHeading="text-shop-by-category" />
				<ProductsFeatured
					sectionHeading="text-featured-products"
					variant="center"
				/>
			</Container>
			<BannerBlock data={bannerDataOne} />
			<Container>
				<BannerWithProducts
					sectionHeading="text-on-selling-products"
					categorySlug="/#"
				/>
			</Container>
			<BannerSliderBlock />
			<Container>
				<ProductsFlashSaleBlock date={"2023-03-01T01:02:03"} />
			</Container>
			<BannerBlock data={bannerDataTwo} />
			<Container>
				<BrandGridBlock sectionHeading="text-top-brands" />
				<BannerCard
					banner={banner}
					className="mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
					effectActive={true}
				/>
				<NewArrivalsProductFeed />
				<DownloadApps />
				<Support />
				<Instagram />
				<Subscription className="bg-opacity-0 px-8 sm:px-16 xl:px-0" />
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
