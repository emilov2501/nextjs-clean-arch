import { Either } from "fp-ts/Either";
import { Failure } from "../lib";

export interface IRepository<T> {
	findAll(): Promise<Either<Failure, T[]>>;
	findById(id: string): Promise<Either<Failure, T | null>>;
	create(data: T): Promise<Either<Failure, T>>;
	update(id: string, data: Partial<T>): Promise<Either<Failure, T>>;
	delete(id: string): Promise<Either<Failure, void>>;
	findOne(filter: Partial<T>): Promise<Either<Failure, T | null>>;
	findMany(filter: Partial<T>): Promise<Either<Failure, T[]>>;
}
