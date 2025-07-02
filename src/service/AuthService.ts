import { AuthTokensDto, LoginInputDto } from "@/shared/api/auth";

export interface AuthService {
	login(params: LoginInputDto): Promise<AuthTokensDto>;
}
