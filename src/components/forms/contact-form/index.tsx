import { Stack, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { isEmail, isNotEmpty, hasLength } from "@mantine/form";
import classes from "./styles.module.css";

// Components
import DefaultBorder from "../../default-border";
import PrimaryButton from "../../buttons/primary-button";

export default function ContactForm() {
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
  return (
    <DefaultBorder padding={20} radius={20}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
          <PrimaryButton size="md" type="submit">
            Send
          </PrimaryButton>
        </Stack>
      </form>
    </DefaultBorder>
  );
}
