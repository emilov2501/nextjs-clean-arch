import { LoginForm } from "@/features/auth";

export default async function LoginView() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md">
				<h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
				<LoginForm />
			</div>
		</div>
	);
}
