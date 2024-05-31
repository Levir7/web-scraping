import { Module } from '@nestjs/common';
import { InvestingService } from './investing/investing.service';
import { InvestingController } from './investing/investing.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from './config/envs/envs';
import { InvestingModule } from './investing/investing.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: envs.host,
      port: envs.port,
      username: envs.username,
      password: envs.password,
      database: envs.database,
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    InvestingModule
  ],
  controllers: [ InvestingController],
  providers: [ InvestingService],
})
export class AppModule {}
