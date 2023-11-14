"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const ContactFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Field must not be empty" }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = (formData: z.infer<typeof ContactFormSchema>) => {
    toast.success("Your message has been sent successfully.");
    form.reset();
  };

  return (
    <div className="w-full max-w-lg text-left rounded-lg self-center my-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Leave us a message...."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
