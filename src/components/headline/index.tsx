import { Title, Text } from "@mantine/core";

type HeadlineProps = {
  title: string;
  highlight: string;
};

export default function Headline({ title, highlight }: HeadlineProps) {
  const parts = title.split(new RegExp(`(${highlight})`, "gi"));

  return (
    <Title order={1}>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <Text key={index} span c="primaryColor" inherit>
            {part}
          </Text>
        ) : (
          part
        )
      )}
    </Title>
  );
}
