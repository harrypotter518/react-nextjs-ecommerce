import Layout from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import OrderDetails from "@components/order/order-details";

export default function OrderPage() {
	return (
		<AccountLayout>
			<OrderDetails className="p-0" />
		</AccountLayout>
	);
}

OrderPage.Layout = Layout;
