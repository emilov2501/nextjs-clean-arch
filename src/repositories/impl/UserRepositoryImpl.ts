import { plainToInstance } from "class-transformer";
import { Either, left, right } from "fp-ts/lib/Either";
import { UserEntity } from "@/entities/UserEntity";
import { Failure, HttpInstance, ServerErrorFailure } from "@/shared/lib";
import { UserRepository } from "../UserRepository";

export class UserRepositoryImpl implements UserRepository {
	constructor(private readonly http: HttpInstance) {}

	create(data: UserEntity): Promise<Either<Failure, UserEntity>> {
		throw new Error("Method not implemented.");
	}
	update(
		id: string,
		data: Partial<UserEntity>,
	): Promise<Either<Failure, UserEntity>> {
		throw new Error("Method not implemented.");
	}
	delete(id: string): Promise<Either<Failure, void>> {
		throw new Error("Method not implemented.");
	}
	findOne(
		filter: Partial<UserEntity>,
	): Promise<Either<Failure, UserEntity | null>> {
		throw new Error("Method not implemented.");
	}
	findMany(
		filter: Partial<UserEntity>,
	): Promise<Either<Failure, UserEntity[]>> {
		throw new Error("Method not implemented.");
	}

	async findById(id: number): Promise<Either<Failure, UserEntity | null>> {
		try {
			const { data } = await this.http.get<UserEntity | null>(`/users/${id}`);
			if (!data) {
				return right(null);
			}

			const user = plainToInstance(UserEntity, data);
			return right(user);
		} catch {
      return left(new ServerErrorFailure());
		}
	}

	async findAll(): Promise<Either<Failure, UserEntity[]>> {
		try {
			const { data } = await this.http.get<{ users: UserEntity[] }>("/users");
			const users = data.users.map((user) => plainToInstance(UserEntity, user));
			return right(users);
		} catch {
			return left(new ServerErrorFailure());
		}
	}
}
