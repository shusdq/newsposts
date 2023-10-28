import { Service } from "typedi";;
import { AppDataSource } from "../dataSource";
import { NewspostEntity } from "../entity/Newspost";
import { Newspost, PageOptions } from "../../../interfaces";
import { DeleteResult, InsertResult, UpdateResult } from "typeorm";

@Service()
class NewspostsRepository {
  repository;
  constructor() {
    this.repository = AppDataSource.getRepository(NewspostEntity);
  }

  getAllNewspostsPaged = async ({page, size}: PageOptions): Promise<any> => {
    try {
      const queryBuilder = this.repository.createQueryBuilder("newspost");
      const total = await queryBuilder.getCount();
  
      const response = await queryBuilder.leftJoinAndSelect("newspost.author", "author")
        .skip((page + 0) * size)
        .take(size)
        .getMany();
  
      return {
        pageOptions: { page, size },
        total,
        results: response,
      };
    } catch (error) {
      throw error;
    }
  };

  getNewspostById = async (id: string): Promise<Newspost | null> => {
    const queryBuilder = this.repository.createQueryBuilder("newspost");
    const response = queryBuilder.leftJoinAndSelect("newspost.author", "author")
    .where('newspost.id = :id', {id: id})
    .getOne()
    return response
  } 

  createNewspost = async (newsposts: Newspost): Promise<InsertResult> => {
    const queryBuilder = this.repository.createQueryBuilder();
    const response = queryBuilder.insert()
    .into(NewspostEntity)
    .values({...newsposts, createdAt: new Date()})
    .execute()

    return response;

  }

  updateNewspost = async (updatedFields: any, id: string): Promise<UpdateResult> => {
    const queryBuilder = this.repository.createQueryBuilder();
    const response = await queryBuilder.update(NewspostEntity)
    .set(updatedFields)
    .where('newspost.id = :id', {id: id})
    .execute()

    return response
  }

  deleteNewspost = async (id: string): Promise<DeleteResult> => {
    const queryBuilder = this.repository.createQueryBuilder('newspost');
    const response = queryBuilder.delete()
    .from(NewspostEntity)
    .where("newspost.id = :id", { id: id })
    .execute()
    return response
  }
}

export default NewspostsRepository;
