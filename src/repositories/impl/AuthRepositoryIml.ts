import { HttpInstance } from "@/shared/lib/http/http";
import { AuthRepository } from "../AuthRepository";
import { AuthTokensDto, LoginInputDto } from "../dtos/AuthDto";

class AuthRepositoryImpl implements AuthRepository {
	constructor(public readonly http: HttpInstance) {}

	login = async ({
		username,
		password,
	}: LoginInputDto): Promise<AuthTokensDto> => {
		const { data } = await this.http.post("/auth/login", {
			username,
			password,
			expiresInMins: 30,
		});

		return data;
	};
}

export { AuthRepositoryImpl };
