import { AuthTokensDto, LoginInputDto } from "./dtos/AuthDto";

export interface AuthRepository {
	login(dto: LoginInputDto): Promise<AuthTokensDto>;
}
