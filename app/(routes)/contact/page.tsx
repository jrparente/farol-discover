"use client";

import Hero from "@/components/page-hero";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { contactSchema } from "./constants";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { Clock, Facebook, Instagram, Mail, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { isSubmitSuccessful, isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }

      toast({
        title: "Success!",
        description: "Your message has been sent.",
      });

      form.reset();
    } catch (error: any) {
      console.log("There was a problem with the fecth: " + error.message);
      toast({
        variant: "destructive",
        title: "There has been an error.",
        description: "Your message has not been sent.",
      });
    }
  }

  return (
    <div className="h-full">
      <Hero
        title="Let's Plan Your Next Adventure"
        subtitle="Have questions or special requests? We are here to help."
      />
      <section className="my-8 py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Reach Out to Us!
          </h2>
          <p className="text-lg text-muted-foreground">
            We&apos;re always excited to hear from you! Whether it&apos;s a
            question, suggestion, or just a hello, drop us a message and
            we&apos;ll get back to you as soon as possible.
          </p>
          <div className="mt-8">
            <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-10">
              <Card className="flex flex-col flex-1 min-w-0">
                <CardHeader className="flex items-center">
                  <Mail className="w-20 h-20 text-primary bg-primary/10 p-4 rounded-lg mb-4" />
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center">
                  <p className="text-base">
                    Email:{" "}
                    <Link
                      href="mailto:info@faroldiscover.pt"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      info@faroldiscover.pt
                    </Link>
                  </p>
                  <p className="text-base">
                    Phone:{" "}
                    <Link
                      href="tel:+351917104248"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      +351 917 104 248
                    </Link>
                  </p>
                </CardContent>
              </Card>

              <Card className="flex flex-col flex-1 min-w-0">
                <CardHeader className="flex items-center">
                  <ThumbsUp className="w-20 h-20 text-primary bg-primary/10 p-4 rounded-lg mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center">
                  <ul className="flex space-x-4 mb-6">
                    <li>
                      <Link
                        href="#"
                        className="text-muted-foreground hover:opacity-80"
                      >
                        <Instagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-muted-foreground hover:opacity-80"
                      >
                        <Facebook />
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="flex flex-col flex-1 min-w-0">
                <CardHeader className="flex items-center">
                  <Clock className="w-20 h-20 text-primary bg-primary/10 p-4 rounded-lg mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">
                    Business Hours
                  </h3>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center">
                  <p className="text-base">Mon-Fri: 9am - 6pm</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Form {...form}>
                <form
                  className="w-full bg-muted rounded-lg p-4 px-3 md:px-6 focus-within:shadow-sm grid gap-4 sm:grid-cols-2 sm:gap-6 "
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <div className="col-span-2 sm:col-span-1">
                    <FormField
                      control={form.control}
                      name="first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              disabled={isSubmitting}
                              placeholder="First name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <FormField
                      control={form.control}
                      name="last_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              disabled={isSubmitting}
                              placeholder="Last name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              disabled={isSubmitting}
                              placeholder="Email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              disabled={isSubmitting}
                              placeholder="Phone number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-2">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              disabled={isSubmitting}
                              placeholder="Message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-muted-foreground">
                      By submitting this form you agree to our terms and
                      conditions and our privacy policy which explains how we
                      may collect, use and disclose your personal information
                      including to third parties.
                    </p>
                  </div>
                  <div className="col-span-2">
                    <Button disabled={isSubmitting} type="submit">
                      Send Message
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
