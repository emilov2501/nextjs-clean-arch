import { AuthRepository } from "@/repositories/AuthRepository";
import { LoginInputDto } from "@/repositories/dtos/AuthDto";
import { AuthService } from "../AuthService";

export class AuthServiceImpl implements AuthService {
	constructor(private readonly authRepository: AuthRepository) {}

	login = async (params: LoginInputDto) => {
		return await this.authRepository.login(params);
	};
}
