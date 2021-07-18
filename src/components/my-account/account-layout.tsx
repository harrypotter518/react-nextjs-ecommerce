import PageHeader from "@components/ui/page-header";
import Container from "@components/ui/container";
import AccountNav from "@components/my-account/account-nav";
import Subscription from "@components/common/subscription";

const AccountLayout: React.FunctionComponent<{}> = ({ children }) => {
	return (
		<>
			<PageHeader pageHeader="text-page-my-account" />
			<Container>
				<div className="py-16 lg:py-20 px-0 xl:max-w-screen-xl mx-auto flex  md:flex-row w-full">
					<div className="flex flex-col md:flex-row w-full">
						<AccountNav />
						<div className="md:w-4/6 2xl:w-8/12 mt-4 md:mt-0">{children}</div>
					</div>
				</div>

				<Subscription />
			</Container>
		</>
	);
};

export default AccountLayout;
