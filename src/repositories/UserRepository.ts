import { UserEntity } from "@/entities/UserEntity";
import { IRepository } from "@/shared/interfaces/repository";

export interface UserRepository extends IRepository<UserEntity> {}
