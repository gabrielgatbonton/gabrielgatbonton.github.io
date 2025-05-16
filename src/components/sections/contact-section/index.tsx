import { HTMLAttributes } from "react";
import { Box, BoxProps } from "@mantine/core";

// Components
import Headline from "../../headline";
import ContactForm from "../../forms/contact-form";
import DefaultAccordion from "../../default-accordion";

import { MAPPED_FAQS } from "../../../constants/data";

type ContactSectionProps = BoxProps & HTMLAttributes<HTMLDivElement>;

export default function ContactSection({ ...props }: ContactSectionProps) {
  return (
    <Box {...props}>
      <Headline
        title="Feeling up to it? Slide Into My Inbox"
        highlight="My Inbox"
        mb={42}
      />

      <Box mb={42}>
        <ContactForm />
      </Box>

      <Headline
        order={2}
        title="Frequently Asked Questions"
        highlight="Questions"
        mb={42}
      />

      {/* FAQS */}
      <DefaultAccordion value={MAPPED_FAQS} />
    </Box>
  );
}
