import prismaClient from "../prisma";

interface DeleteCustomerProps {
  id: string
}

class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {

    if (!id) {
      throw new Error("[-] Error while deleting user: missing params");
    } 

    if (id.length != 24)
    {
      throw new Error("[-] Error while deleting user: invalid id (LENGTH MUST BE EQUAL TO 24)");
    } 

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer)
    {
        throw new Error("[-] Error while deleting user: unknown client (ID)");
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id
      }
    })

    return { status: "Done"}
  }
}

export { DeleteCustomerService }