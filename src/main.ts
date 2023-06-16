import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
//yarn typeorm-ts-node-esm migration:generate ./src/migrations/update-post-table -d ./src/data-source.ts
//yarn typeorm-ts-node-commonjs migration:run
