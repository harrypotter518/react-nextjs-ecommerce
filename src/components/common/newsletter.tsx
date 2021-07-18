import Button from "@components/ui/button";
import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
interface NewsLetterFormValues {
	email: string;
}
export default function Newsletter() {
	const { register, handleSubmit } = useForm<NewsLetterFormValues>();
	function onSubmit(values: NewsLetterFormValues) {
		console.log(values, "news letter");
	}
	return (
		<div className="fixed top-0 start-0 z-20 w-screen h-screen flex items-center justify-center bg-black bg-opacity-20">
			<div className="newsletterPopup flex flex-col max-w-full max-h-full bg-white overflow-hidden rounded-md m-5">
				<div className="flex items-center">
					<div className="flex flex-col px-6 sm:px-8 lg:px-12 py-10 md:py-6 text-center">
						<h2 className="text-heading text-2xl lg:text-3xl lg:leading-10 font-bold mb-3 -mt-2">
							Newsletter
						</h2>
						<p className="text-body text-sm leading-6 md:leading-7 px-4 lg:px-12">
							We send you release &amp; offer information to your mail.
						</p>
						<form className="pt-6" onSubmit={handleSubmit(onSubmit)}>
							<Input
								className="px-4 lg:px-7 h-12 mb-4 text-center"
								placeholder="Enter your email address"
								type="email"
								{...register("email", { required: true })}
							/>
							<Button variant="slim" className="w-full">
								<span className="py-0.5 lg:py-2 px-4">Subscribe</span>
							</Button>
						</form>
					</div>

					<div className="newsletterImage flex-shrink-0 items-center justify-center hidden md:flex">
						<img
							src="/assets/images/newsletter.jpg"
							alt="Thumbnail"
							className="object-cover w-full h-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
