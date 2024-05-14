import { FastifyReply, FastifyRequest } from "fastify";
import { LoginCustomerService } from "../services/login-customer-service";

class LoginCustomerControl {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { email, password } = request.body as { email: string, password: string };
    
    const customerService = new LoginCustomerService();

    const customer = await customerService.execute({ email, password });

    reply.send(customer);
  }
}

export { LoginCustomerControl };
