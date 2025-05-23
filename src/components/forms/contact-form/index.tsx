import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Stack, TextInput, Textarea } from "@mantine/core";
import { useForm, isEmail, isNotEmpty, hasLength } from "@mantine/form";
import { NOTIF_CONTROL } from "../../../constants/notifications";
import classes from "./styles.module.css";

// Components
import DefaultBorder from "../../default-border";
import PrimaryButton from "../../buttons/primary-button";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: isNotEmpty("Name cannot be empty"),
      email: isEmail("Email should be valid"),
      message: hasLength(
        { min: 10, max: 500 },
        "Message should be between 10 and 500 characters"
      ),
    },
  });

  const sendEmail = async (values: typeof form.values) => {
    setLoading(true);
    try {
      const timestamp = new Date().toLocaleString(); // or use .toISOString() for UTC

      const payload = {
        ...values,
        time: timestamp,
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        payload
      );

      if (result.status === 200) {
        NOTIF_CONTROL.success();
        form.reset();
      }
    } catch (error) {
      console.error("Error sending email:", error);
      NOTIF_CONTROL.error();
    }
    setLoading(false);
  };
  return (
    <DefaultBorder padding={20} radius={20}>
      <form onSubmit={form.onSubmit((values) => sendEmail(values))}>
        <Stack>
          <TextInput
            size="md"
            label="Name"
            radius={8}
            classNames={{
              input: classes.customInput,
            }}
            key={form.key("name")}
            {...form.getInputProps("name")}
            data-invalid={form.errors.name ?? undefined}
          />
          <TextInput
            size="md"
            label="Email"
            radius={8}
            classNames={{
              input: classes.customInput,
            }}
            key={form.key("email")}
            {...form.getInputProps("email")}
            data-invalid={form.errors.email ?? undefined}
          />
          <Textarea
            size="md"
            label="Message"
            radius={8}
            minRows={3}
            autosize
            classNames={{
              input: classes.customInput,
            }}
            key={form.key("message")}
            {...form.getInputProps("message")}
            data-invalid={form.errors.message ?? undefined}
          />
          <PrimaryButton loading={loading} size="md" type="submit">
            Send
          </PrimaryButton>
        </Stack>
      </form>
    </DefaultBorder>
  );
}
