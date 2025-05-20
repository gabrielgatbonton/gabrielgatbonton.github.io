import { HTMLAttributes } from "react";
import { Box, BoxProps } from "@mantine/core";

// Hooks
import { useResponsiveValue } from "../../../hooks/useResponsiveValue";

// Components
import Headline from "../../headline";
import ContactForm from "../../forms/contact-form";
import DefaultAccordion from "../../default-accordion";

// Constants
import { MAPPED_FAQS } from "../../../constants/data";
import {
  RESPONSIVE_HEADLINE,
  RESPONSIVE_FAQ,
  RESPONSIVE_TEXT_ALIGN,
} from "../../../constants/responsive";

type ContactSectionProps = BoxProps & HTMLAttributes<HTMLDivElement>;

export default function ContactSection({ ...props }: ContactSectionProps) {
  const HEADLINE_ORDER = useResponsiveValue(RESPONSIVE_HEADLINE);
  const FAQ_HEADLINE_ORDER = useResponsiveValue(RESPONSIVE_FAQ);
  const TEXT_ALIGN = useResponsiveValue(RESPONSIVE_TEXT_ALIGN);
  return (
    <Box {...props}>
      <Headline
        title="Feeling up to it? Slide Into My Inbox"
        highlight="My Inbox"
        mb={42}
        order={HEADLINE_ORDER}
        ta={TEXT_ALIGN}
      />

      <Box mb={42}>
        <ContactForm />
      </Box>

      <Headline
        title="Frequently Asked Questions"
        highlight="Questions"
        mb={42}
        order={FAQ_HEADLINE_ORDER}
        ta={TEXT_ALIGN}
      />

      {/* FAQS */}
      <DefaultAccordion value={MAPPED_FAQS} />
    </Box>
  );
}
