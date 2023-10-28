import { EntityManager } from "typeorm";
import { NewspostFactory, UserFactory } from "./factory";

export const createUser = async (manager: EntityManager) => {
    const userFactory = new UserFactory();
    const user = await userFactory.create();
    await manager.insert(userFactory.entity, user);
  }
  
export const createNewsposts = async (manager: EntityManager, count: number) => {
    const newspostFactory = new NewspostFactory();
    for (let index = 0; index < count; index++) {
      const newspost = await newspostFactory.create();
      await manager.insert(newspostFactory.entity, newspost);
    }
}

