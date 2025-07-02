"use server";

import { LoginInputDto, LoginInputSchema } from "@/shared/api/auth";
import { actionClient, SessionManager } from "@/shared/lib";
import { AppContainer } from "../(libs)/di/container";

export const loginAction = actionClient
	.inputSchema(LoginInputSchema)
	.use<LoginInputDto>(async (props) => {
		console.log(props);
		const result = await AppContainer.getInstance().loginUseCase.execute(
			props.clientInput as LoginInputDto,
		);

		if (!result || !result.accessToken) {
			throw new Error("TokenAccessError: No tokens returned");
		}

		await SessionManager.create(result.accessToken, result.refreshToken);
		return props.next();
	})
	.action(async () => {
		return {
			success: true,
		};
	});
