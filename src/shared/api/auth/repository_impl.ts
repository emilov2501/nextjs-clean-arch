import { HttpInstance } from "@/shared/lib/http/http";
import { AuthTokensDto, LoginInputDto } from "./dto";
import { AuthRepository } from "./repository";

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
