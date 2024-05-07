import { Options } from '@mikro-orm/core';
import { defineConfig } from '@mikro-orm/postgresql';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserEntity } from './user.entity';

const logger = new Logger('MikroORM');

const config = defineConfig({
  entities: [UserEntity],
  dbName: 'dockerizer',
  debug: true,
  logger: logger.log.bind(logger),
});

export default function getConfig(configService: ConfigService): Options {
  return {
    ...config,
    user: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
  };
}
