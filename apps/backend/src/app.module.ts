import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { PrismaService } from './db/prisma.service';
import { ServicoModule } from './servico/servico.module';
import { ServicoController } from './servico/servico.controller';

@Module({
  imports: [DbModule, ServicoModule],
  controllers: [ServicoController],
  providers: [PrismaService],
})
export class AppModule {}
