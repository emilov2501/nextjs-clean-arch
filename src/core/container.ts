import { LoginUseCase } from "@/features/auth/usecase/LoginUseCase";
import { AuthRepository } from "@/repositories/AuthRepository";
import { AuthRepositoryImpl } from "@/repositories/impl/AuthRepositoryIml";
import { AuthService } from "@/services/AuthService";
import { AuthServiceImpl } from "@/services/impl/AuthServiceImpl";
import { http } from "@/shared/api/client";

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
