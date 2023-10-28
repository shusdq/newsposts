import App from "./src/App";
import Container from "typedi";
import NewsController from "./src/controllers/NewsController";
import convictConfig from "./src/utils/convictConfig";
import AuthController from "./src/controllers/AuthController";
import { AppDataSource } from "./src/dal/dataSource";

const main = async () => {
  const port = convictConfig.get('PORT');
  const host = convictConfig.get('HOST');
  AppDataSource.initialize().then(() => {
    const app = new App([Container.get(NewsController), Container.get(AuthController)], port, host);

    app.listen();
  }).catch((error) => console.log(error))
 
};

main()

