import Layout from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import AccountDetails from "@components/my-account/account-details";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function AccountDetailsPage() {
	return (
		<AccountLayout>
			<AccountDetails />
		</AccountLayout>
	);
}

AccountDetailsPage.Layout = Layout;

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
