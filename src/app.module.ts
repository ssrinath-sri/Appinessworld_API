import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [ProductsModule, CategoryModule, MongooseModule.forRoot('mongodb+srv://admin:7YaPbDRtNPcfBD3P@employees-sru2a.mongodb.net/Employees?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
