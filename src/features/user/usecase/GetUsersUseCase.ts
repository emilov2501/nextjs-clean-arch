import { UserEntity } from "@/entities/UserEntity";
import { UserService } from "@/services/UserService";
import { UseCase } from "@/shared/interfaces/usecase";

export class GetUsersUseCase implements UseCase<null, UserEntity[]> {
	constructor(private readonly userService: UserService) {}

	async execute(): Promise<UserEntity[]> {
		return await this.userService.getUsers();
	}
}
