import { AuthTokensDto, LoginInputDto } from "./AuthDto";

export interface AuthRepository {
	login(dto: LoginInputDto): Promise<AuthTokensDto>;
}
