import { LoginUseCase } from "@/application/auth/LoginUseCase";
import { AuthService } from "@/domain/auth/AuthService";
import { AuthServiceImpl } from "@/domain/auth/impl/AuthServiceImpl";
import { AuthRepository, AuthRepositoryImpl } from "@/infrastucture/auth";
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
