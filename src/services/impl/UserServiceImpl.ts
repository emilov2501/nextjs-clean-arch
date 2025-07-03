import { UserEntity } from "@/entities/UserEntity";
import { UserRepository } from "@/repositories/UserRepository";
import { UserService } from "../UserService";

export class UserServiceImpl implements UserService {
	constructor(private readonly userRepository: UserRepository) {}

	async getUsers(): Promise<UserEntity[]> {
		const users = await this.userRepository.findAll();

		if (users._tag === "Right") {
			return users.right;
		}

		return [];
	}

	async getUser(userId: number): Promise<UserEntity | null> {
    const user = await this.userRepository.findById(userId);

    if (user._tag !== "Right") {
      console.error(user.left)
      return null
    }

    return user.right;
	}
}
