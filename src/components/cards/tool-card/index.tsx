import { Box, Card, Group, Image, Text, Title } from "@mantine/core";

type ToolCardProps = {
  title: string;
  description: string;
  logo: string;
};

export default function ToolCard({ title, description, logo }: ToolCardProps) {
  return (
    <Card h={78} padding={16} bg="primaryColor.4" radius={8}>
      <Group align="center">
        <Card padding={10} w={46} h={46} radius={8}>
          <Image m="auto" w="100%" src={logo} />
        </Card>
        <Box lh="115%">
          <Title mb={4} size={18} fw={600} c="white">
            {title}
          </Title>
          <Text size="xs" c="#5C5853" fw={500}>
            {description}
          </Text>
        </Box>
      </Group>
    </Card>
  );
}
