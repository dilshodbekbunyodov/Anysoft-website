import { ReactNode } from "react";

export interface AccordionProps {
  data: Data[];
}

export interface AccordionContentProps {
  active: number;
  id: number;
  children: ReactNode;
}

export interface Data {
  id: number;
  title: string;
  children: ReactNode;
}
