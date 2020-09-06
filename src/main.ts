import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as expressListRoutes from 'express-list-routes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
  // Count list of api's presented in our project
  const server = app.getHttpServer();
  const router = server._events.request._router;
  console.log(expressListRoutes({}, 'API:', router));
}
bootstrap();



// // Men -->  menfootwear --> mentop --> menbottom wear -- t shirts
// // women --> footwear --> women's top --> womens's bottom wear --> inner wear 
// // Sports --> sunglass --> clotrhing accessories -->  sport watchs --> electronices 


// db.product.aggregate( 
//   {$unwind: '$id_category'}, 
//   {$group: {_id: '$id_category', count: {$sum: 1}} } 
//  )