
import { AuthService } from "@/service/AuthService"

export class LoginFeature {
  constructor (private readonly authService: AuthService) {}

  login = async (username: string, password: string) => {
    return await this.authService.login(username, password)
  }
}