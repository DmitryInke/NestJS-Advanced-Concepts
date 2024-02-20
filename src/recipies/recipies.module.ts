import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './recipies.module-definition';

@Module({})
export class RecipiesModule extends ConfigurableModuleClass {}
