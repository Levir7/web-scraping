import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs/envs';

async function bootstrap() {
  const logger = new Logger('Main-Gateway')

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes( 
    new ValidationPipe({ 
    whitelist: true, 
    forbidNonWhitelisted: true, 
    }) 
   );
   
  app.enableCors();
  
   await app.listen(envs.app_port);

  logger.log(`Server is running on port ${envs.app_port}`)
}
bootstrap();
