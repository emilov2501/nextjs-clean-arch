import { useLogin } from "./api/useLogin";

export default function LoginForm() {
	const { login, loading } = useLogin();
	return (
		<form
			className="space-y-4"
			action={(form) =>
				login({
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
				disabled={loading}
				type="submit"
				className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
			>
				Sign In
			</button>
		</form>
	);
}
