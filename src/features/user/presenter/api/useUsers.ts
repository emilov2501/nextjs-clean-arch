import { useQuery } from "@tanstack/react-query";
import { AppContainer } from "@/core/container";

export const useUsers = () => {
	const { data = [], isLoading } = useQuery({
		queryKey: ["users"],
		queryFn: () => AppContainer.getInstance().getUsersUseCase.execute(),
	});

	return {
		users: data,
		loading: isLoading,
	};
};
