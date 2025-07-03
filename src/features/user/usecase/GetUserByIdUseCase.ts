import { UserEntity } from "@/entities/UserEntity";
import { UserService } from "@/services/UserService";
import { UseCase } from "@/shared/interfaces/usecase";

export class GetUserByIdUseCase implements UseCase<number, UserEntity | null> {
	constructor(private readonly userService: UserService) {}
	async execute(userId?: number): Promise<UserEntity | null> {
    if (!userId) {
      return null
    }

    const user = await this.userService.getUser(userId);

    if (!user) {
      return null
    }

    return user;
	}
}
