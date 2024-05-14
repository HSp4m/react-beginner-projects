import prismaClient from "../prisma";

interface VerifyCustomerProps {
  email: string;
}


class VerifyCustomerService {
  async execute({ email }: VerifyCustomerProps) {
    if (!email)
    {
      throw new Error("[-] Missing email");
    }

    const costumer = await prismaClient.customer.findFirst({
      where: {
        email: email,
      },
    });

    

    if (!costumer || !costumer.status)
      return false;
    
    else 
      return true
    
  }
}

export { VerifyCustomerService };