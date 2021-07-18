import Button from "@components/ui/button";
import Input from "@components/ui/input";
import Logo from "@components/ui/logo";
import { useForm } from "react-hook-form";
import { useUI } from "@contexts/ui.context";
import { useTranslation } from "next-i18next";

type FormValues = {
	email: string;
};

const defaultValues = {
	email: "",
};

const ForgetPasswordForm = () => {
	const { t } = useTranslation();
	const { setModalView, openModal, closeModal } = useUI();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues,
	});

	function handleSignIn() {
		setModalView("LOGIN_VIEW");
		return openModal();
	}

	const onSubmit = (values: FormValues) => {
		console.log(values, "token");
	};

	return (
		<div className="py-6 px-5 sm:p-8 bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300">
			<div className="text-center mb-9 pt-2.5">
				<div onClick={closeModal}>
					<Logo />
				</div>
				<p className="text-sm md:text-base text-body mt-3 sm:mt-4 mb-8 sm:mb-10">
					{t("common:forgot-password-helper")}
				</p>
			</div>
			<form
				onSubmit={handleSubmit((data) => onSubmit(data))}
				className="flex flex-col justify-center"
				noValidate
			>
				<Input
					labelKey="forms:label-email"
					type="email"
					variant="solid"
					className="mb-4"
					{...register("email", {
						required: `${t("forms:email-required")}`,
						pattern: {
							value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							message: t("forms:email-error"),
						},
					})}
					errorKey={errors.email?.message}
				/>

				<Button type="submit" className="h-11 md:h-12 w-full mt-2">
					{t("common:text-reset-password")}
				</Button>
			</form>
			<div className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-10 mb-6 sm:mb-7">
				<hr className="w-full border-gray-300" />
				<span className="absolute -top-2.5 px-2 bg-white">
					{t("common:text-or")}
				</span>
			</div>
			<div className="text-sm sm:text-base text-body text-center">
				{t("common:text-back-to")}{" "}
				<button
					type="button"
					className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none"
					onClick={handleSignIn}
				>
					{t("common:text-login")}
				</button>
			</div>
		</div>
	);
};

export default ForgetPasswordForm;
