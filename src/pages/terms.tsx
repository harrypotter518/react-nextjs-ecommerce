import Layout from "@components/layout/layout";
import Container from "@components/ui/container";
import PageHeader from "@components/ui/page-header";
import { termsAndServices } from "@settings/terms-settings";
import { Link, Element } from "react-scroll";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function makeTitleToDOMId(title: string) {
	return title.toLowerCase().split(" ").join("_");
}

export default function TermsPage() {
	const { t } = useTranslation("terms");
	return (
		<>
			<PageHeader pageHeader="text-page-terms-of-service" />
			<div className="mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 border-b border-gray-300 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24">
				<Container>
					<div className="flex flex-col md:flex-row">
						<nav className="md:w-72 xl:w-3/12 mb-8 md:mb-0">
							<ol className="sticky md:top-16 lg:top-28 z-10">
								{termsAndServices?.map((item, index) => (
									<li key={item.id}>
										<Link
											spy={true}
											offset={-120}
											smooth={true}
											duration={500}
											to={makeTitleToDOMId(item.title)}
											activeClass="text-heading font-semibold"
											className="block cursor-pointer py-3 lg:py-3.5 text-sm lg:text-base  text-gray-700 uppercase"
										>
											{(index <= 9 ? "0" : "") +
												index +
												" " +
												t(`${item.title}`)}
										</Link>
									</li>
								))}
							</ol>
						</nav>
						{/* End of section scroll spy menu */}

						<div className="md:w-9/12 md:ps-8 ">
							{termsAndServices?.map((item) => (
								// @ts-ignore
								<Element
									key={item.title}
									id={makeTitleToDOMId(item.title)}
									className="mb-10"
								>
									<h2 className="text-lg md:text-xl lg:text-2xl text-heading font-bold mb-4">
										{t(`${item.title}`)}
									</h2>
									<div
										className="text-heading text-sm leading-7 lg:text-base lg:leading-loose"
										dangerouslySetInnerHTML={{
											__html: t(`${item.description}`),
										}}
									/>
								</Element>
							))}
						</div>
						{/* End of content */}
					</div>
				</Container>
			</div>
		</>
	);
}

TermsPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				"common",
				"forms",
				"menu",
				"terms",
				"footer",
			])),
		},
	};
};
