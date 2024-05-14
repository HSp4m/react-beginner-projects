import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/create-customer-service";

interface CreateCustomerProps {
  name: string;
  email: string;
  password: string;
}

class CreateCustomerControl {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, password } = request.body as CreateCustomerProps;

    const customerService = new CreateCustomerService();

    const customer = await customerService.execute({ name, email, password });

    reply.send(customer)
  }
}

export { CreateCustomerControl };