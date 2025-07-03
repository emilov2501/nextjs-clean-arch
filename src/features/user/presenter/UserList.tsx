"use client";

import { useCallback } from "react";
import { UserEntity } from "@/entities/UserEntity";
import { useUsers } from "./api/useUsers";
import { UserCard } from "./UserCard";
import { useRouter } from "next/navigation";

export default function UserList() {
	const { users, loading } = useUsers();
	const router = useRouter();

	const handleClick = useCallback(
		(user: UserEntity) => router.push("/dashboard/user/" + user.id),
		[],
	);

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">User List</h1>
			{loading ? (
				<p>Loading...</p>
			) : (
				<ul className="space-y-2">
					{users.map((user) => (
						<UserCard key={user.id} user={user} onClick={handleClick} />
					))}
				</ul>
			)}
		</div>
	);
}
