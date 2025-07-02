import { AuthService } from "@/service/AuthService";
import { AuthServiceImpl } from "@/service/impl/AuthServiceImpl";
import { AuthRepository } from "@/shared/api/auth";
import { AuthRepositoryImpl } from "@/shared/api/auth/repository_impl";
import { http } from "@/shared/api/client";

import { LoginUseCase } from "@/usecase/auth/LoginUseCase";

export class AppContainer {
	private static instance: AppContainer;

	private authRepository: AuthRepository;
	private authService: AuthService;
	public loginUseCase: LoginUseCase;

	private constructor() {
		// Repositories
		this.authRepository = new AuthRepositoryImpl(http);

		// Services
		this.authService = new AuthServiceImpl(this.authRepository);

		// Usecases
		this.loginUseCase = new LoginUseCase(this.authService);
	}

	public static getInstance(): AppContainer {
		if (!AppContainer.instance) {
			AppContainer.instance = new AppContainer();
		}
		return AppContainer.instance;
	}
}
