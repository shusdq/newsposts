import { UserEntity } from "../entity/User";
import { faker } from "@faker-js/faker"
import bcrypt from 'bcrypt'
import { NewspostEntity } from "../entity/Newspost";

export abstract class Factory<T> {
  entity: any;
  abstract create(): Promise<T>;
}

export class UserFactory extends Factory<UserEntity> {
    constructor() {
        super()
        super.entity = UserEntity
    }
    create = async (): Promise<UserEntity> => {
        const user = new UserEntity()
        user.email = faker.internet.email()
        const password = faker.internet.password()
        const encryptedPassword = await bcrypt.hash(password, 10);
        user.password = encryptedPassword
        return user
    }
}

export class NewspostFactory extends Factory<NewspostEntity> {
    constructor() {
        super()
        super.entity = NewspostEntity
    }
    create = async (): Promise<NewspostEntity> => {
        const newspost = new NewspostEntity()
        newspost.title = faker.lorem.words(3);
        newspost.text = faker.lorem.paragraph(3);
        newspost.isPrivate = faker.datatype.boolean();
        newspost.createdAt = faker.date.anytime()
        return newspost
    } 
}