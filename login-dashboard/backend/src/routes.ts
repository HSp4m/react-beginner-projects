import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerControl } from "./control/create-customer-control";
import { ListCustomerControl } from "./control/list-customer-control";
import { DeleteCustomerControl } from "./control/delete-customer-control";
import { VerifyCustomerControl } from "./control/verify-customer-control";
import { LoginCustomerControl } from "./control/login-customer-control";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  fastify.post( "/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomerControl().handle(request, reply);
  });

  fastify.get( "/customers", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomerControl().handle(request, reply);
  })

  fastify.delete( "/customer", async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCustomerControl().handle(request, reply);
  });

  fastify.post(
    "/iscustomer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new VerifyCustomerControl().handle(request, reply);
    }
  );

  fastify.post(
    "/canlogin",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new LoginCustomerControl().handle(request, reply);
    }
  );
}