
import { AuthRepository } from "@/shared/api/v1/auth";

export class AuthService {
  constructor (private readonly authRepository: AuthRepository) {}

  login = async (username: string, password: string) => {
    return await this.authRepository.login(username, password)
  }
}