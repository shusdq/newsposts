import { Service } from "typedi";
import { PageOptions, PagedPosts, Newspost } from "../../interfaces";
import NewspostsRepository from "../dal/newsposts/newsposts.repository";
import { DeleteResult, InsertResult, UpdateResult } from "typeorm";

@Service()
class NewspostsService {
    constructor(private newsposts: NewspostsRepository) {
    }

    getAllPostsPaged = (params: PageOptions): Promise<PagedPosts> => {
        return this.newsposts.getAllNewspostsPaged(params);
    }

    getById = async (id: string): Promise<Newspost | null> => {
        return this.newsposts.getNewspostById(id)
    }

    create = (fields: Newspost): Promise<InsertResult> => { 
        return this.newsposts.createNewspost(fields);
    }

    update = async (id: string, updatedFields: Newspost): Promise<UpdateResult> => {
       return this.newsposts.updateNewspost(updatedFields, id)
    }

    delete = async (id: string): Promise<DeleteResult> => {
      return this.newsposts.deleteNewspost(id)
    }
}

export default NewspostsService;
