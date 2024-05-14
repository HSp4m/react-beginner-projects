import { FastifyReply, FastifyRequest } from "fastify";
import { VerifyCustomerService } from "../services/verify-customer-service";

class VerifyCustomerControl {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { email } = request.body as { email: string };

    const customerService = new VerifyCustomerService();

    const customer = await customerService.execute({ email });

    reply.send(customer);
  }
}

export { VerifyCustomerControl };
