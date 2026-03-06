import { Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) { }


  @Post('create-payment-session')
  createPaymentSession() {
    return {
      message: 'Payment session created'
    }
  }
  @Get("success")
  success() {
    return {
      message: 'Payment session created'
    }
  }

  @Get("cancel")
  cancel() {
    return {
      message: 'Payment session cancelled'
    }
  }

  @Post("webhook")
  async webhook() {
    return {
      message: 'Webhook received'
    }
  }
}

