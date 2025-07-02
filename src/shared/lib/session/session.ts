import { cookies } from "next/headers";

export class SessionManager {
	private static COOKIE_NAME = "session_id";

	static async create(
		accessToken: string,
		refreshToken: string,
	): Promise<void> {
		const sessionId = crypto.randomUUID();
		const accessTokenExpiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
		const refreshTokenExpiresAt = new Date(
			Date.now() + 7 * 24 * 60 * 60 * 1000,
		); // 7 days

		const cookieStore = await cookies();

		// Set access token cookie
		cookieStore.set("access_token", accessToken, {
			expires: accessTokenExpiresAt,
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
		});

		// Set refresh token cookie
		cookieStore.set("refresh_token", refreshToken, {
			expires: refreshTokenExpiresAt,
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
		});

		// Set session cookie
		cookieStore.set(this.COOKIE_NAME, sessionId, {
			expires: refreshTokenExpiresAt,
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
		});
	}

	static async delete(): Promise<void> {
		const cookieStore = await cookies();
		cookieStore.delete(this.COOKIE_NAME);
	}

	static async update(
		accessToken: string,
		refreshToken: string,
	): Promise<void> {
		await this.delete();
		return this.create(accessToken, refreshToken);
	}
}
