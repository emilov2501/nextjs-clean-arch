import { LoginFeature } from "@/features/auth/login"
import { AuthService } from "@/service/AuthService"
import { AuthRepository } from "@/shared/api/v1/auth"
import { v1 } from "@/shared/lib/http"

export class AppContainer {
  private static instance: AppContainer

  private authRepository: AuthRepository
  private authService: AuthService
  public loginFeature: LoginFeature

  private constructor() {
    this.authRepository = new AuthRepository(v1)
    this.authService = new AuthService(this.authRepository)
    this.loginFeature = new LoginFeature(this.authService)
  }

  public static getInstance(): AppContainer {
    if (!AppContainer.instance) {
      AppContainer.instance = new AppContainer()
    }
    return AppContainer.instance
  }
}
