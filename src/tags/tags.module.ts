import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';

@Module({
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule implements OnApplicationBootstrap {
  constructor(private readonly moduleRef: ModuleRef) {}

  async onApplicationBootstrap() {
    const contexId = ContextIdFactory.create();
    this.moduleRef.registerRequestByContextId({ hello: 'world' }, contexId);
    const tagsService = await this.moduleRef.resolve(TagsService, contexId);
    console.log(tagsService);
    // const tagsServices = await Promise.all([
    //   this.moduleRef.resolve(TagsService, contexId),
    //   this.moduleRef.resolve(TagsService, contexId),
    // ]);
    // console.log(tagsServices[0] === tagsServices[1]);
  }
}
