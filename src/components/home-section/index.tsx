import { Text, Box, BoxProps } from "@mantine/core";

type HomeSectionProps = BoxProps & {};

export default function HomeSection({ ...props }: HomeSectionProps) {
  return (
    <Box {...props}>
      <Text>Test</Text>
    </Box>
  );
}
