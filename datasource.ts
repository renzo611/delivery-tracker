
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';


config({ path: '.env' });
const configService = new ConfigService();


export const DefaultOptions: DataSourceOptions = {
 type: 'postgres',
 host: configService.getOrThrow('DB_HOST'),
 port: configService.getOrThrow('DB_PORT'),
 username: configService.getOrThrow('DB_USERNAME'),
 password: configService.getOrThrow('DB_PASSWORD'),
 database: configService.getOrThrow('DB_NAME'),
 synchronize: false,
 entities: ['dist/**/*.entity.{js,ts}'],
 migrations: ['migrations/**'],
};


export default new DataSource(DefaultOptions);