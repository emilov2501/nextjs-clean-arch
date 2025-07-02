import { AuthTokensDto, LoginInputDto } from "@/shared/api/auth";

export interface AuthRepository {
	login(dto: LoginInputDto): Promise<AuthTokensDto>;
}
