"use client";

import { useAction } from "next-safe-action/hooks";
import { loginAction } from "../acions/loginAction";

export const useLogin = () => {
	const { execute, isPending } = useAction(loginAction);
	return { login: execute, loading: isPending };
};
