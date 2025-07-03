"use client";

import { useUsers } from "./api/useUsers";

export default function UserList() {
	const { users, loading } = useUsers();
	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">User List</h1>
			{loading ? (
				<p>Loading...</p>
			) : (
				<ul className="space-y-2">
					{users.map((user, index) => (
						<li key={index} className="p-2 bg-gray-100 rounded shadow">
							{user.fullName}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
