import Input from "@components/ui/input";
import PasswordInput from "@components/ui/password-input";
import Button from "@components/ui/button";
import { useForm } from "react-hook-form";
import { useLoginMutation, LoginInputType } from "@framework/auth/use-login";
import { useUI } from "@contexts/ui.context";
import Logo from "@components/ui/logo";
import { useTranslation } from "next-i18next";

const LoginForm: React.FC = () => {
	const { t } = useTranslation();
	const { setModalView, openModal, closeModal } = useUI();
	const { mutate: login, isLoading } = useLoginMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginInputType>();

	function onSubmit({ email, password, remember_me }: LoginInputType) {
		login({
			email,
			password,
			remember_me,
		});
		console.log(email, password, remember_me, "data");
	}
	function handleSignUp() {
		setModalView("SIGN_UP_VIEW");
		return openModal();
	}
	function handleForgetPassword() {
		setModalView("FORGET_PASSWORD");
		return openModal();
	}
	return (
		<div className="py-6 px-5 sm:p-8 bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300">
			<div className="text-center mb-9 pt-2.5">
				<div onClick={closeModal}>
					<Logo />
				</div>
				<p className="text-sm md:text-base text-body mt-3 sm:mt-4 mb-8 sm:mb-10">
					{t("common:login-helper")}
				</p>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col justify-center"
				noValidate
			>
				<div className="flex flex-col space-y-4">
					<Input
						labelKey="forms:label-email"
						type="email"
						variant="solid"
						{...register("email", {
							required: `${t("forms:email-required")}`,
							pattern: {
								value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: t("forms:email-error"),
							},
						})}
						errorKey={errors.email?.message}
					/>
					<PasswordInput
						labelKey="forms:label-password"
						errorKey={errors.password?.message}
						{...register("password", {
							required: `${t("forms:password-required")}`,
						})}
					/>
					<div className="flex items-center justify-center">
						<div className="flex items-center flex-shrink-0">
							<label className="switch relative inline-block w-10 cursor-pointer">
								<input
									id="remember"
									type="checkbox"
									className="opacity-0 w-0 h-0"
									{...register("remember_me")}
								/>
								<span className="bg-gray-500 absolute inset-0 transition-all duration-300 ease-in slider round"></span>
							</label>
							<label
								htmlFor="remember"
								className="flex-shrink-0 text-sm text-heading ps-3 cursor-pointer"
							>
								{t("forms:label-remember-me")}
							</label>
						</div>
						<div className="flex ms-auto">
							<button
								type="button"
								onClick={handleForgetPassword}
								className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
							>
								{t("common:text-forgot-password")}
							</button>
						</div>
					</div>
					<div className="relative">
						<Button
							type="submit"
							loading={isLoading}
							disabled={isLoading}
							className="h-11 md:h-12 w-full mt-3"
						>
							{t("common:text-login")}
						</Button>
					</div>
				</div>
			</form>
			<div className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-10 mb-6 sm:mb-7">
				<hr className="w-full border-gray-300" />
				<span className="absolute -top-2.5  px-2 bg-white">
					{t("common:text-or")}
				</span>
			</div>
			<div className="text-sm sm:text-base text-body text-center">
				{t("common:text-no-account")}{" "}
				<button
					type="button"
					className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none"
					onClick={handleSignUp}
				>
					{t("common:text-register")}
				</button>
			</div>
		</div>
	);
};

export default LoginForm;
