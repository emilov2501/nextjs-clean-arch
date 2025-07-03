"use client";

import { useUser } from "./api/useUser";

export default function UserDetails({ userId }: { userId: number }) {
	const { user } = useUser(userId);

	if (!user) {
		return null;
	}

	return (
		<div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6 mt-6">
			<h2 className="text-2xl font-semibold mb-4 text-gray-800">
				{user.fullName}
			</h2>
			<p className="text-gray-600 mb-2">
				Email: <span className="font-medium text-gray-900">{user.email}</span>
			</p>
			<p className="text-gray-600">
				First name:{" "}
				<span className="font-medium text-gray-900">{user.firstName}</span>
			</p>
			<p className="text-gray-600">
				Last name:{" "}
				<span className="font-medium text-gray-900">{user.lastName}</span>
			</p>
		</div>
	);
}
