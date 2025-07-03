"use server";

import { AppContainer } from "@/core/container";
import { LoginInputDto } from "@/repositories/dtos/AuthDto";
import { actionClient, createSession } from "@/shared/lib";
import { loginInputSchema } from "../libs/schema";

export const loginAction = actionClient
	.inputSchema(loginInputSchema)
	.use<LoginInputDto>(async (props) => {
		console.log(props);
		const result = await AppContainer.getInstance().loginUseCase.execute(
			props.clientInput as LoginInputDto,
		);

		if (!result || !result.accessToken) {
			throw new Error("TokenAccessError: No tokens returned");
		}

		await createSession(result.accessToken, result.refreshToken);
		return props.next();
	})
	.action(async () => {
		return {
			success: true,
		};
	});
