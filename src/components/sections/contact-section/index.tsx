import { HTMLAttributes } from "react";
import { Box, BoxProps, TitleOrder } from "@mantine/core";

// Hooks
import { useMediaSelector } from "../../../hooks/useMediaSelector";

// Components
import Headline from "../../headline";
import ContactForm from "../../forms/contact-form";
import DefaultAccordion from "../../default-accordion";

// Constants
import { MAPPED_FAQS } from "../../../constants/data";
import {
  RESPONSIVE_HEADLINE,
  FAQ_RESPONSIVE_HEADLINE,
} from "../../../constants/responsive";

type ContactSectionProps = BoxProps & HTMLAttributes<HTMLDivElement>;

export default function ContactSection({ ...props }: ContactSectionProps) {
  const HEADLINE_ORDER = useMediaSelector<TitleOrder>(RESPONSIVE_HEADLINE);
  const FAQ_HEADLINE_ORDER = useMediaSelector<TitleOrder>(
    FAQ_RESPONSIVE_HEADLINE
  );
  return (
    <Box {...props}>
      <Headline
        title="Feeling up to it? Slide Into My Inbox"
        highlight="My Inbox"
        mb={42}
        order={HEADLINE_ORDER}
      />

      <Box mb={42}>
        <ContactForm />
      </Box>

      <Headline
        title="Frequently Asked Questions"
        highlight="Questions"
        mb={42}
        order={FAQ_HEADLINE_ORDER}
      />

      {/* FAQS */}
      <DefaultAccordion value={MAPPED_FAQS} />
    </Box>
  );
}
