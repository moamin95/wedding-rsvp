"use client";

import { useState, useEffect } from "react";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import localFont from "next/font/local";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Oval } from "react-loader-spinner";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";

const pangaia = localFont({ src: "../../../public/PPPangaia-Medium.ttf" });
const playfair = localFont({ src: "../../../public/Playfair.otf" });

const guestArray = Array.from({ length: 10 }, (_, i) => i.toString());

const formSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    guests: z.number().nullable(),
    songRequest: z.string().max(255).optional(),
    team: z.enum(["bride", "groom", ""]).optional(),
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
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      guests: null,
      songRequest: "",
      team: "",
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
      form.setValue("team", "");
    }
  }, [decline, form]);

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const payload = {
      guestName: values.name,
      guestCount: values.guests,
      songRequest: values.songRequest,
      team: values.team,
      attending: !values.decline,
    };

    try {
      const response = await fetch("/api/add-reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      sessionStorage.setItem("guestName", values.name);
      router.push(`/thankyou`);
    } catch (error) {
      setIsLoading(false);
      console.error("Error submitting RSVP:", error);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <main className="flex min-h-[80vh] flex-col items-center py-24 gap-12 bg-soft">
      <h1
        className={`${pangaia.className} font-semibold text-4xl text-onyx uppercase`}
      >
        RSVP
      </h1>
      {isLoading ? (
        <div className="p-24">

          <Oval
            visible={true}
            height="50"
            width="50"
            color="#353935"
            secondaryColor="#F08E80"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <Form {...form}>
          <motion.form
            initial="hidden"
            animate="visible"
            variants={formVariants}
            onSubmit={form.handleSubmit(handleSubmit)}
            className={`${playfair.className} max-w-sm w-3/4 flex flex-col gap-4 p-2`}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Name"
                      type="name"
                      className="border-onyx"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="guests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Party Size (Including yourself)</FormLabel>
                  <FormControl>
                    <Select
                      disabled={decline}
                      value={field.value !== null ? String(field.value) : ""}
                      onValueChange={(value) => {
                        field.onChange(Number(value));
                      }}
                    >
                      <SelectTrigger className="max-w-md w-full border-onyx">
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
              )}
            />
            <FormField
              control={form.control}
              name="songRequest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Song Request</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="079me - B Young"
                      type="text"
                      disabled={decline}
                      className="border-onyx"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="team"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team</FormLabel>
                  <FormControl>
                    <RadioGroup
                      disabled={decline}
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex space-x-4"
                    >
                      <RadioGroupItem value="bride" id="team-bride" />
                      <FormLabel
                        htmlFor="team-bride"
                        className={
                          decline ? "text-gray-500 cursor-not-allowed" : ""
                        }
                      >
                        Team Bride
                      </FormLabel>
                      <RadioGroupItem value="groom" id="team-groom" />
                      <FormLabel
                        htmlFor="team-groom"
                        className={
                          decline ? "text-gray-500 cursor-not-allowed" : ""
                        }
                      >
                        Team Groom
                      </FormLabel>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="decline"
              render={({ field }) => (
                <div className="items-top flex space-x-2 mt-2">
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
                  </div>
                </div>
              )}
            />
            <Button
              type="submit"
              className="mt-2 bg-pink text-onyx text-lg p-4 uppercase hover:bg-onyx hover:text-soft transition-colors duration-300 ease-in-out"
            >
              Submit
            </Button>
          </motion.form>
        </Form>
      )}
    </main>
  );
}
