import { AuthTokensDto, LoginInputDto } from "@/repositories/dtos/AuthDto";

export interface AuthService {
	login(params: LoginInputDto): Promise<AuthTokensDto>;
}
