
import { HttpInstance } from "@/shared/lib/http";

export type AuthLoginResponse = {
  accessToken: string,
  refreshToken: string
}

class AuthRepository {
  constructor (public readonly http: HttpInstance) {}

  login = async (username: string, password: string) => {
    const { data } = await this.http.post<AuthLoginResponse>('/auth/login', {
      username,
      password,
      expiresInMins: 30
    })
    return data
  }
}

export { AuthRepository }