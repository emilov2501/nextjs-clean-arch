"use client";

import { loginAction } from "./actions/loginAction";

export default function Home() {
	const onSubmit = async () => {
		await loginAction({
			username: "emilys",
			password: "emilyspass",
		});
	};

	return <button onClick={onSubmit}>Login</button>;
}
