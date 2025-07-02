import { AuthRepository, LoginInputDto } from "@/shared/api/auth";
import { AuthService } from "../AuthService";

export class AuthServiceImpl implements AuthService {
	constructor(private readonly authRepository: AuthRepository) {}

	login = async (params: LoginInputDto) => {
		return await this.authRepository.login(params);
	};
}
