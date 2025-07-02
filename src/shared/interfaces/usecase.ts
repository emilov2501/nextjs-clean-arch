export interface UseCase<TParams, TResult> {
	/**
	 * Executes the use case with the given parameters
	 * @param params - Input parameters for the use case
	 * @returns Promise containing the result
	 */
	execute(params?: TParams): Promise<TResult>;
}
