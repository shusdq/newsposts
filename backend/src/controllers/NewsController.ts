import express from 'express'
import { Service } from 'typedi';
import NewspostsService from '../bll/Newsposts.service';
import { ExtRequest } from '../../interfaces';
import pageOptionsMiddleware from '../middleware/pageOptionsMiddleware';
import Ajv from 'ajv';
import addFormats  from 'ajv-formats';
import { HttpCode, ValidationError } from '../utils/customError';
import auth from '../middleware/passportMiddleware';
import newspostsSchema from '../models/newsPostsSchema';

@Service()
class NewsController {
  private router: express.Router;
  private newspostValidator: any;

  constructor(private newsPostsService: NewspostsService) {
    this.router = express.Router(); 
    this.initializeValidators()
    this.initializeRoutes();
  }

  private initializeValidators() {
    const ajv = new Ajv({allErrors: true})
    addFormats(ajv)
    this.newspostValidator = ajv.compile(newspostsSchema)
  }

  private initializeRoutes() {
    this.router.get('/newsposts/error', this.testError);
    this.router.get('/newsposts', pageOptionsMiddleware(), auth.required, this.getAllPostsQuery);
    this.router.get('/newsposts/:id', auth.required, this.getPostById);
    this.router.post('/newsposts', auth.required, this.createPost);
    this.router.put('/newsposts/:id', auth.required, this.updatePost);
    this.router.delete('/newsposts/:id', auth.required, this.deletePost);
  }
  
  getAllPostsQuery = async (req: ExtRequest, res: express.Response, next: express.NextFunction) => {
    try {
     const params = req.pageOptions;
     if (!params) {
      throw new ValidationError({name: "NewspostsServiceError", message: "No params found!", httpCode: HttpCode.NOT_FOUND});
    }
     const posts = await this.newsPostsService.getAllPostsPaged(params);
     res.send(posts);
    } catch (error) {
      next(error)
    }
   };

  getPostById = async  (req: ExtRequest, res: express.Response, next: express.NextFunction) => {
    try {
      const post = await this.newsPostsService.getById(req.params.id);
      res.send({...post,  });
    } catch (error) {
      next(error)
    } 
  };

  createPost = async (req: ExtRequest, res: express.Response, next: express.NextFunction) => {
    try {
      const post = req.body;

      const isValid = this.newspostValidator(post);  
      if (!isValid) {
        throw new ValidationError({name: "ValidationError", message: this.newspostValidator.errors.map((e: { message: string; }) => e.message)});
      }
      const newspost = await this.newsPostsService.create({
        ...post,
        author: { ...req.auth, id: req.auth.user_id },

      });
    
      res.send(newspost);
    } catch (error) {
      next(error);
    }
  };

  updatePost = async  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      const post = req.body;
      console.log(post);
      
      const isValid = this.newspostValidator(post);
      if (!isValid) {
        throw new ValidationError({name: "ValidationError", message: this.newspostValidator.errors.map((e: { message: string; }) => e.message)});
      }
      const updatedNewspost = await this.newsPostsService.update(req.params.id, req.body);
      console.log(updatedNewspost);
      
      res.send(updatedNewspost);
    } catch (error) {
     next(error)
    } 
  };

  deletePost = async  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      const deletedPost = await this.newsPostsService.delete(req.params.id);
      res.send(deletedPost);
    } catch (error) {
        next(error)
    }
  }

  testError = (_req: express.Request, _res: express.Response, next: express.NextFunction) => {
    try {
      throw new ValidationError({ name: 'NewspostsServiceError', message: 'Test', httpCode: HttpCode.INTERNAL_SERVER_ERROR });
    } catch (error) {
      next(error);
    }
  };
}

export default NewsController