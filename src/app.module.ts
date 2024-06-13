import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './config/prisma/prisma.module';
import { validate } from './config/server/env.validation';
import { ProjectModule } from './modules/project/project.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ClientModule } from './modules/client/client.module';
import { PhaseModule } from './modules/phase/phase.module';
import { TaskModule } from './modules/task/task.module';
import { DriveModule } from './modules/drive/drive.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      cache: true,
      validate,
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    ClientModule,
    ProjectModule,
    PhaseModule,
    TaskModule,
    DriveModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
