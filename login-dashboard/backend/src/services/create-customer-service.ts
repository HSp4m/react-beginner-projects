import prismaClient from "../prisma";

interface CreateCustomerProps {
  name: string;
  email: string;
  password: string;
}

class CreateCustomerService {
  async execute({ name, email, password }: CreateCustomerProps) {
    if (!email || !name || !password)
    {
      throw new Error("[-] Error while creating user: missing params")
    } 

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        password,
        status: true
      }
    })

    return customer;

  }
}

export { CreateCustomerService };