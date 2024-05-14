import prismaClient from "../prisma";

interface LoginCustomerProps {
  email: string;
  password: string;
}

class LoginCustomerService {
  async execute({ email, password }: LoginCustomerProps) {
    
    if (!email || !password) {
      throw new Error("[-] Missing arguments");
    }
    
    const customer = await prismaClient.customer.findFirst({
      where: {
        email: email,
        password: password,
      },
    });

    if (!customer || !customer.status || email != customer.email || password != customer.password) return false;
    else return customer;
  }
}

export { LoginCustomerService };
