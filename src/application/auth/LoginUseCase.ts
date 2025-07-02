import { AuthService } from "@/domain/auth/AuthService";
import { AuthTokensDto, LoginInputDto } from "@/infrastucture/auth";
import { UseCase } from "@/shared/interfaces/usecase";

export class LoginUseCase implements UseCase<LoginInputDto, AuthTokensDto> {
	constructor(private readonly authService: AuthService) {}

	execute = async (params: LoginInputDto) => {
		return await this.authService.login(params);
	};
}
