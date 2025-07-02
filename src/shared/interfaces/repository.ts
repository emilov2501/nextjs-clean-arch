export interface IRepository<T> {
	/**
	 * Gets all entities
	 * @returns Promise containing array of all entities
	 *
	 * Example:
	 * const users = await userRepository.findAll();
	 * // returns: [{ id: '1', name: 'John', email: 'john@example.com' }, ...]
	 */
	findAll(): Promise<T[]>;

	/**
	 * Finds entity by its unique identifier
	 * @param id - Unique identifier of the entity
	 * @returns Promise containing found entity or null if not found
	 *
	 * Example:
	 * const user = await userRepository.findById('123');
	 * // returns: { id: '123', name: 'John', email: 'john@example.com' }
	 */
	findById(id: string): Promise<T | null>;

	/**
	 * Creates new entity
	 * @param data - Data for creating entity
	 * @returns Promise containing created entity
	 *
	 * Example:
	 * const newUser = await userRepository.create({
	 *   name: 'John',
	 *   email: 'john@example.com'
	 * });
	 */
	create(data: T): Promise<T>;

	/**
	 * Updates existing entity
	 * @param id - Unique identifier of entity to update
	 * @param data - Partial entity data for update
	 * @returns Promise containing updated entity
	 *
	 * Example:
	 * const updatedUser = await userRepository.update('123', {
	 *   name: 'John Updated'
	 * });
	 */
	update(id: string, data: Partial<T>): Promise<T>;

	/**
	 * Deletes entity
	 * @param id - Unique identifier of entity to delete
	 * @returns Promise that resolves when deletion is complete
	 *
	 * Example:
	 * await userRepository.delete('123');
	 */
	delete(id: string): Promise<void>;

	/**
	 * Finds one entity matching filter criteria
	 * @param filter - Filter criteria as partial entity
	 * @returns Promise containing found entity or null if not found
	 *
	 * Example:
	 * const user = await userRepository.findOne({
	 *   email: 'john@example.com'
	 * });
	 */
	findOne(filter: Partial<T>): Promise<T | null>;

	/**
	 * Finds multiple entities matching filter criteria
	 * @param filter - Filter criteria as partial entity
	 * @returns Promise containing array of matching entities
	 *
	 * Example:
	 * const users = await userRepository.findMany({
	 *   name: 'John'
	 * });
	 * // returns: [{ id: '1', name: 'John', ... }, { id: '2', name: 'John', ... }]
	 */
	findMany(filter: Partial<T>): Promise<T[]>;
}
