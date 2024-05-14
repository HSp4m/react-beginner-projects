"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "./ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "./ui/toaster"
import { api } from "@/service/api";

const registerSchema = z.object({
  email: z.string(),
  username: z.string().min(4, {
    message: "Username is too short. Must be at least 4 characters",
  }),
  password: z.string().min(6, {
    message: "Passowrd is too short. Must be at least 6 characters",
  }),
});

type RegisterSchema = z.infer<typeof registerSchema>

export function CreateRegisterForm(props: any) {

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema)
  })

  async function onSubmit(data: RegisterSchema) {
    if (!data.username || !data.password || !data.email) return;

    const response = await api.post("/customer", {
      name: data.username,
      email: data.email,
      password: data.password
    })

    toast({
      title: "Response data:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(response.data, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <Toaster />
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="sp4m" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="blablabha@gmail.com"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="<secure password>"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between">
          <Button type="submit">Submit</Button>
          <Button variant="link" type="button" {...props}>
            Already have a account? Login
          </Button>
        </div>
      </form>
    </Form>
  );
}