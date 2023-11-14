"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { ContactFormSchema } from "../../lib/validationSchemas";
import Spinner from "./spinner";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (formData: z.infer<typeof ContactFormSchema>) => {
    try {
      setIsSubmitting(true);
      const response = await axios.post("/api/sendEmail", formData);
      if (response.status === 200)
        toast.success("Your message has been sent successfully.");
    } catch (error) {
      toast.error("Something went wrong. " + error);
    }
    setIsSubmitting(false);
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
          <Button disabled={isSubmitting} type="submit">
            Submit
            {isSubmitting && <Spinner />}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
