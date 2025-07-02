export interface AuthTokensDto {
	accessToken: string;
	refreshToken: string;
}

export interface LoginInputDto {
	username: string;
	password: string;
}
