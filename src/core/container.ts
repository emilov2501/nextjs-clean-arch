import { LoginUseCase } from "@/features/auth/usecase/LoginUseCase";
import { GetUserByIdUseCase } from "@/features/user/usecase/GetUserByIdUseCase";
import { GetUsersUseCase } from "@/features/user/usecase/GetUsersUseCase";
import { AuthRepository } from "@/repositories/AuthRepository";
import { AuthRepositoryImpl } from "@/repositories/impl/AuthRepositoryIml";
import { UserRepositoryImpl } from "@/repositories/impl/UserRepositoryImpl";
import { UserRepository } from "@/repositories/UserRepository";
import { AuthService } from "@/services/AuthService";
import { AuthServiceImpl } from "@/services/impl/AuthServiceImpl";
import { UserServiceImpl } from "@/services/impl/UserServiceImpl";
import { UserService } from "@/services/UserService";
import { http } from "@/shared/api/client";

export class AppContainer {
	private static instance: AppContainer;

	private authRepository: AuthRepository;
	private userRepository: UserRepository;
	private userService: UserService;
	private authService: AuthService;

	public loginUseCase: LoginUseCase;
	public getUsersUseCase: GetUsersUseCase;
	public getUserByIdUseCase: GetUserByIdUseCase;

	private constructor() {
		// Repositories
		this.authRepository = new AuthRepositoryImpl(http);
		this.userRepository = new UserRepositoryImpl(http);

		// Services
		this.authService = new AuthServiceImpl(this.authRepository);
		this.userService = new UserServiceImpl(this.userRepository);

		// Usecases
		this.loginUseCase = new LoginUseCase(this.authService);
		this.getUsersUseCase = new GetUsersUseCase(this.userService);
		this.getUserByIdUseCase = new GetUserByIdUseCase(this.userService);
	}

	public static getInstance(): AppContainer {
		if (!AppContainer.instance) {
			AppContainer.instance = new AppContainer();
		}
		return AppContainer.instance;
	}
}
