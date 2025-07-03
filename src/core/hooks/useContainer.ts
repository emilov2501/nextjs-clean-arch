"use client";

import { useState } from "react";
import { AppContainer } from "../container";

export const useContainer = (): AppContainer => {
	const [container] = useState(() => AppContainer.getInstance());
	return container;
};
