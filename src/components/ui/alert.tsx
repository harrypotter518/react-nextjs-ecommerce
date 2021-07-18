interface AlertProps {
	message?: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
	return (
		<div className="h-full py-4 px-5 text-sm text-red-600 font-semibold flex items-center justify-center border border-red-200 rounded">
			{message}
		</div>
	);
};

export default Alert;
