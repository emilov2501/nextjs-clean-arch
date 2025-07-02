import { AuthTokensDto, LoginInputDto } from "@/repositories/dtos/AuthDto";
import { AuthService } from "@/services/AuthService";
import { UseCase } from "@/shared/interfaces/usecase";

export class LoginUseCase implements UseCase<LoginInputDto, AuthTokensDto> {
	constructor(private readonly authService: AuthService) {}

	execute = async (params: LoginInputDto) => {
		return await this.authService.login(params);
	};
}
