import { Card, CardProps } from "@mantine/core";
import classes from "./styles.module.css";
import clsx from "clsx";
import React from "react";

type DefaultBorderProps = CardProps & {
  children: React.ReactNode;
  responsiveClass?: string;
};

export default function DefaultBorder({
  children,
  responsiveClass,
  ...props
}: DefaultBorderProps) {
  return (
    <Card {...props} className={clsx(classes.borderCard, responsiveClass)}>
      {children}
    </Card>
  );
}
