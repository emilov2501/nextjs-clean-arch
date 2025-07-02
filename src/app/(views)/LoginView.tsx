import { useAction } from "next-safe-action/hooks";
import { loginAction } from "../(actions)/loginAction";

export default function LoginView() {
	const { execute } = useAction(loginAction);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md">
				<h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
				<form
					className="space-y-4"
					action={(form) =>
						execute({
							username: form.get("username")?.toString() ?? "",
							password: form.get("password")?.toString() ?? "",
						})
					}
				>
					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="email"
						>
							Email
						</label>
						<input
							type="text"
							id="username"
							name="username"
							className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="you@example.com"
						/>
					</div>
					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="password"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="••••••••"
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
					>
						Sign In
					</button>
				</form>
			</div>
		</div>
	);
}
