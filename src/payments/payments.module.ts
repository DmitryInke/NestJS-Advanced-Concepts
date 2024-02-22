import { Module } from '@nestjs/common';
import { PaymentsWebhookController } from './payments-webhook.controller';
import { NotificatiionsService } from './notificatiions.service';
import { SubscriptionsService } from './subscriptions.service';
import { EventContext } from './context/event-context';

@Module({
  controllers: [PaymentsWebhookController],
  providers: [NotificatiionsService, SubscriptionsService, EventContext],
})
export class PaymentsModule {}
