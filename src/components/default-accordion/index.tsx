import { Accordion } from "@mantine/core";
import classes from "./styles.module.css";
import { useState } from "react";
import clsx from "clsx";

// Types
import { FaqItem } from "../../constants/data";

type DefaultAccordionProps = {
  value: FaqItem[];
};

export default function DefaultAccordion({ value }: DefaultAccordionProps) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Accordion
      variant="separated"
      classNames={{
        item: classes.accordionItem,
        control: classes.accordionBorder,
        label: classes.accordionLabel,
      }}
      onChange={setActive}
    >
      {value.map(({ question, answer }) => (
        <Accordion.Item value={question} key={question}>
          <Accordion.Control
            className={clsx({
              [classes.accordionLabelActive]: question === active,
            })}
          >
            {question}
          </Accordion.Control>
          <Accordion.Panel>{answer}</Accordion.Panel>
        </Accordion.Item>
      ))}

      {/* <Accordion.Item value="item-2">
        <Accordion.Control>Can you work with existing teams?</Accordion.Control>
        <Accordion.Panel>
          Absolutely! I can collaborate seamlessly with existing teams,
          integrating into your workflow to enhance design and development
          efforts.
        </Accordion.Panel>
      </Accordion.Item> */}
    </Accordion>
  );
}
