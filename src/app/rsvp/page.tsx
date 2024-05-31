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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import groupedParties from "../../lib/groupedParties";

const pangaia = localFont({ src: "../../../public/PPPangaia-Medium.ttf" });
const playfair = localFont({ src: "../../../public/Playfair.otf" });

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
  const [partyGuests, setPartyGuests] = useState<string[]>([]);
  const [guestResponses, setGuestResponses] = useState<{
    [key: string]: string | null;
  }>({});
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
    } else if (partyGuests.length > 0) {
      form.setValue("guests", partyGuests.length + 1);
    }
  }, [decline, form, partyGuests]);

  const checkNameInGroupedParties = (name: string) => {
    for (const party in groupedParties) {
      if (
        groupedParties[
          party as unknown as keyof typeof groupedParties
        ].includes(name)
      ) {
        return groupedParties[party as unknown as keyof typeof groupedParties];
      }
    }
    return null;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    form.setValue("name", name);

    if (name.length > 2) {
      const party = checkNameInGroupedParties(name);
      setPartyGuests(party ? party.filter((guest) => guest !== name) : []);
      setGuestResponses(
        party
          ? party.reduce((acc, guest) => {
              if (guest !== name) acc[guest] = null;
              return acc;
            }, {} as { [key: string]: string | null })
          : {}
      );

      // If no party is found, set guests to 1
      if (!party) {
        form.setValue("guests", 1);
      }
    } else {
      setPartyGuests([]);
      setGuestResponses({});
      form.setValue("guests", null);
    }

    // Reset guest count to 0 if the name input is empty
    if (name.length === 0) {
      form.setValue("guests", 0);
    }
  };

  const handleGuestResponseChange = (guest: string, response: string) => {
    setGuestResponses((prev) => ({ ...prev, [guest]: response }));
    const attendingCount = Object.values({
      ...guestResponses,
      [guest]: response,
    }).filter((r) => r === "attending").length;
    form.setValue("guests", attendingCount + 1);
  };

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    const payload = {
      guestName: values.name,
      guestCount: values.guests,
      songRequest: values.songRequest,
      team: values.team,
      attending: !values.decline,
      guestResponses,
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

  const formLabelStyle = `${pangaia.className} text-lg text-onyx`;

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
            className={`${pangaia.className} max-w-sm w-3/4 flex flex-col gap-4 p-2`}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={formLabelStyle}>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Use the name we call you..."
                      type="name"
                      className="border-onyx"
                      onChange={handleNameChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!decline && partyGuests.length > 0 && (
              <div>
                <h3 className="mb-2">Party Members</h3>
                <ul className="">
                  {partyGuests.map((guest, index) => (
                    <li key={index} className="p-1">
                      {guest}
                      <RadioGroup
                        onValueChange={(value) =>
                          handleGuestResponseChange(guest, value)
                        }
                        value={guestResponses[guest] || ""}
                        className="flex space-x-4 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="attending"
                            id={`attending-${guest}`}
                            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                          />
                          <FormLabel
                            htmlFor={`attending-${guest}`}
                            className="text-gray-700"
                          >
                            Attending
                          </FormLabel>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="not_attending"
                            id={`not_attending-${guest}`}
                            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                          />
                          <FormLabel
                            htmlFor={`not_attending-${guest}`}
                            className="text-gray-700"
                          >
                            Not Attending
                          </FormLabel>
                        </div>
                      </RadioGroup>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <FormField
              control={form.control}
              name="songRequest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={formLabelStyle}>Song Request</FormLabel>
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
                  <FormControl>
                    <RadioGroup
                      disabled={decline}
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex space-x-4 mt-2"
                    >
                      <RadioGroupItem value="bride" id="team-bride" />
                      <FormLabel
                        htmlFor="team-bride"
                        className={
                          decline
                            ? `${pangaia.className} text-gray-500 cursor-not-allowed text-lg`
                            : `${pangaia.className} text-lg`
                        }
                      >
                        Team Bride
                      </FormLabel>
                      <RadioGroupItem value="groom" id="team-groom" />
                      <FormLabel
                        htmlFor="team-groom"
                        className={
                          decline
                            ? `text-gray-500 cursor-not-allowed ${pangaia.className} text-lg`
                            : `${pangaia.className} text-lg`
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
                <div className="items-top flex space-x-2 mt-6">
                  <Checkbox
                    id="decline"
                    checked={field.value}
                    onCheckedChange={(value) => {
                      field.onChange(value);
                      if (value) {
                        form.setValue("guests", 0);
                      } else {
                        form.setValue("guests", partyGuests.length > 0 ? partyGuests.length + 1 : 1);
                      }
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        field.onChange(!field.value);
                      }
                    }}
                    onBlur={field.onBlur}
                    disabled={field.disabled}
                    name={field.name}
                    ref={field.ref}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="decline"
                      className={`${pangaia.className} text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                    >
                      Regretfully Decline 💔
                    </label>
                  </div>
                </div>
              )}
            />
            <Button
              type="submit"
              className={`${pangaia.className} mt-2 bg-[#353935] text-white text-lg p-4 uppercase rounded-md hover:bg-gray-800 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg`}
            >
              Submit
            </Button>
          </motion.form>
        </Form>
      )}
    </main>
  );
}
