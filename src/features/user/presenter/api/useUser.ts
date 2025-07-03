import { useQuery } from "@tanstack/react-query";
import { useContainer } from "@/core/hooks/useContainer";

export const useUser = (userId: number) => {
	const { getUserByIdUseCase } = useContainer();

	const { data, isLoading } = useQuery({
    retry: false,
		queryKey: ["user", userId],
		queryFn: () => getUserByIdUseCase.execute(userId),
	});

	return { user: data, loading: isLoading };
};
