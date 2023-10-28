import { AppDataSource } from "../dataSource";
import { createUser, createNewsposts } from "./helper";

AppDataSource.initialize().then(async () => {
    await AppDataSource.manager.transaction(
        async (transactionEntityManager) => {

    await createUser(transactionEntityManager);

    await createNewsposts(transactionEntityManager, 20);
        }
    )
})
