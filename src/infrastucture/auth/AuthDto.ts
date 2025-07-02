import z from "zod";
import { LoginInputSchema } from "./AuthSchema";

export interface AuthTokensDto {
	accessToken: string;
	refreshToken: string;
}

export type LoginInputDto = z.infer<typeof LoginInputSchema>;
