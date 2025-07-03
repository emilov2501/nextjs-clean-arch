"use client";

import { useQuery } from "@tanstack/react-query";
import { useContainer } from "@/core/hooks/useContainer";

export const useUsers = () => {
	const { getUsersUseCase } = useContainer();
	const { data = [], isLoading } = useQuery({
		queryKey: ["users"],
		queryFn: getUsersUseCase.execute,
	});

	return {
		users: data,
		loading: isLoading,
	};
};
