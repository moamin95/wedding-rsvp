"use client";

import { useEffect } from "react";
import * as z from "zod";
import { useForm, useWatch } from "react-hook-form";
import localFont from "next/font/local";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const pangaia = localFont({ src: "../../../public/PPPangaia-Medium.ttf" });
const guestArray = Array.from({ length: 10 }, (_, i) => i.toString());

const formSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    guests: z.number().nullable(),
    songRequest: z.string().optional(),
    decline: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.decline && data.guests !== 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Guests count must be 0 if you are declining",
        path: ["guests"],
      });
    } else if (!data.decline && (data.guests === null || data.guests < 1)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Guest count must be at least 1 if you are attending",
        path: ["guests"],
      });
    }
  });

export default function Rsvp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      guests: null,
      songRequest: "",
      decline: false,
    },
  });

  const decline = useWatch({
    control: form.control,
    name: "decline",
  });

  useEffect(() => {
    if (decline) {
      form.setValue("guests", 0);
    }
  }, [decline, form]);

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("submit values", values);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 text-white">
      <h1 className={`${pangaia.className} text-9xl`}>RSVP</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-6 p-6 "
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Name" type="name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="guests"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Number of Guests</FormLabel>
                  <FormControl>
                    <Select
                      disabled={decline}
                      value={field.value !== null ? String(field.value) : ""}
                      onValueChange={(value) => {
                        field.onChange(Number(value));
                      }}
                    >
                      <SelectTrigger className="max-w-md w-full">
                        <SelectValue placeholder="0">
                          {field.value !== null
                            ? String(field.value)
                            : "Select number of guests"}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {guestArray.map((count) => (
                            <SelectItem key={count} value={count}>
                              {count}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="songRequest"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Song Request</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="079me - B Young"
                      type="text"
                      disabled={decline}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="decline"
            render={({ field }) => {
              return (
                <div className="items-top flex space-x-2">
                  <Checkbox
                    id="decline"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        field.onChange(!field.value);
                      }
                    }}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    disabled={field.disabled}
                    name={field.name}
                    ref={field.ref}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="decline"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Regretfully Decline 💔
                    </label>
                    <p className="text-sm text-muted-foreground">
                      We would love to have you join us, but we understand!
                    </p>
                  </div>
                </div>
              );
            }}
          />
          <Button type="submit" className="w-full bg-white text-black hover:bg-slate-200">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}
