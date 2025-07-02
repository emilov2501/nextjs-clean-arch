"use server";

import { LoginInputSchema } from "@/shared/api/auth";
import { actionClient } from "@/shared/lib";
import { AppContainer } from "../libs/di/container";

export const loginAction = actionClient
	.inputSchema(LoginInputSchema)
	.action(async ({ parsedInput: { username, password } }) => {
		const result = await AppContainer.getInstance().loginUseCase.execute({
			username,
			password,
		});
		console.log(result);
		return {
			success: true,
		};
	});
