import { Service } from "typedi";
import { AppDataSource } from "../dataSource";
import { UserEntity } from "../entity/User";
import { User } from "../../../interfaces";
import { InsertResult } from "typeorm";

@Service()
class UsersRepository {
  repository;
  constructor() {
    this.repository = AppDataSource.getRepository(UserEntity);
  }

  getByEmail = async (email: string): Promise<User | null> => {
    const queryBuilder = this.repository.createQueryBuilder('user');
    const response = queryBuilder
    .where("user.email = :email", { email: email })
    .getOne()
    return response
  };

  createAUser = async (user: User): Promise<InsertResult> => {
    const queryBuilder = this.repository.createQueryBuilder();
    const response = queryBuilder.insert()
    .into(UserEntity)
    .values(user)
    .execute()

    return response;
  };
}

export default UsersRepository;
