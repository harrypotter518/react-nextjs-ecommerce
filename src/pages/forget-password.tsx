import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import ForgetPasswordForm from "@components/auth/forget-password-form";
import PageHeader from "@components/ui/page-header";
import Subscription from "@components/common/subscription";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ForgetPasswordPage() {
	return (
		<>
			<PageHeader pageHeader="Forget Password" />
			<Container>
				<div className="py-16 lg:py-20">
					<ForgetPasswordForm />
				</div>
				<Subscription />
			</Container>
		</>
	);
}

ForgetPasswordPage.Layout = Layout;

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
