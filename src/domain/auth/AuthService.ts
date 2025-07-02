import { AuthTokensDto, LoginInputDto } from "@/infrastucture/auth";

export interface AuthService {
	login(params: LoginInputDto): Promise<AuthTokensDto>;
}
