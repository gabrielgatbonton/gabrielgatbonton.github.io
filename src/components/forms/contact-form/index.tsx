import { Stack, TextInput, Textarea } from "@mantine/core";
import classes from "./styles.module.css";

// Components
import DefaultBorder from "../../default-border";
import PrimaryButton from "../../buttons/primary-button";

export default function ContactForm() {
  return (
    <DefaultBorder padding={20} radius={20}>
      <Stack>
        <TextInput
          size="md"
          label="Name"
          radius={8}
          classNames={{
            input: classes.customInput,
          }}
        />
        <TextInput
          size="md"
          label="Email"
          radius={8}
          classNames={{
            input: classes.customInput,
          }}
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
        />
        <PrimaryButton size="md">Send</PrimaryButton>
      </Stack>
    </DefaultBorder>
  );
}
