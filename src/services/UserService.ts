import { UserEntity } from "@/entities/UserEntity";

export interface UserService {
	getUsers(): Promise<UserEntity[]>;
	getUser(userId: number): Promise<UserEntity | null>;
}
