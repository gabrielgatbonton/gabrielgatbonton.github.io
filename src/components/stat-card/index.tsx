import { Title } from "@mantine/core";

// Components
import DefaultBorder from "../default-border";

type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <DefaultBorder px={24} py={18} radius={10} w={150} h={150}>
      <Title ta="center" size={64} fw={700} c="primaryColor">
        {value}
      </Title>
      <Title size={16} fw={600} tt="uppercase" c="primaryColor">
        {label}
      </Title>
    </DefaultBorder>
  );
}
