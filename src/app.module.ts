import { Module } from '@nestjs/common';
import { InvestingService } from './investing/investing.service';
import { InvestingController } from './investing/investing.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from './config/envs/envs';
import { InvestingModule } from './investing/investing.module';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
      options: {
        trustServerCertificate: true
      }
    }),
    InvestingModule,
    
  ],
  controllers: [ InvestingController],
  providers: [ InvestingService],
})
export class AppModule {
  constructor() {
    dotenv.config();
  }
}
