import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import LoginForm from "@components/auth/login-form";
import PageHeader from "@components/ui/page-header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function SignInPage() {
	return (
		<>
			<PageHeader pageHeader="Sign In" />
			<Container>
				<div className="py-16 lg:py-20">
					<LoginForm />
				</div>
				<Subscription />
			</Container>
		</>
	);
}

SignInPage.Layout = Layout;

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
