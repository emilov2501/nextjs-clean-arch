"use server";

import { cookies } from "next/headers";

const COOKIE_NAME = "session_id";

export async function createSession(
	accessToken: string,
	refreshToken: string,
): Promise<void> {
	const sessionId = crypto.randomUUID();
	const accessTokenExpiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
	const refreshTokenExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

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
	cookieStore.set(COOKIE_NAME, sessionId, {
		expires: refreshTokenExpiresAt,
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
	});
}

export async function deleteSession(): Promise<void> {
	const cookieStore = await cookies();
	cookieStore.delete(COOKIE_NAME);
}

export async function updateSession(
	accessToken: string,
	refreshToken: string,
): Promise<void> {
	await deleteSession();
	return await createSession(accessToken, refreshToken);
}
