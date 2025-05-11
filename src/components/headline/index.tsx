import { Title, Text, TitleProps } from "@mantine/core";

type HeadlineProps = TitleProps & {
  title: string;
  highlight: string;
};

export default function Headline({
  title,
  highlight,
  ...props
}: HeadlineProps) {
  const parts = title.split(new RegExp(`(${highlight})`, "gi"));

  return (
    <Title {...props}>
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
