import { memo } from "react";
import { UserEntity } from "@/entities/UserEntity";

interface UserCardProps {
	user: UserEntity;
	onClick?: (user: UserEntity) => void;
}

export const UserCard = memo(({ user, onClick }: UserCardProps) => {
	return (
		<li
			className="p-2 bg-gray-100 rounded shadow hover:bg-gray-200 cursor-pointer"
			onClick={() => onClick?.(user)}
		>
			{user.fullName}
		</li>
	);
});
