import { UserEntity } from "@/entities/UserEntity";

export interface UserService {
	getUsers(): Promise<UserEntity[]>;
}
