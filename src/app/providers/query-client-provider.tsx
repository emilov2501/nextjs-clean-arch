"use client";

import "reflect-metadata";

import {
	QueryClient,
	QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

export const QueryClientProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [client] = useState(() => new QueryClient());

	return (
		<ReactQueryClientProvider client={client}>
			{children}
		</ReactQueryClientProvider>
	);
};
