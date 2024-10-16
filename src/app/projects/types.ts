interface projectDetailsDataItemI {
  id: number;
  type: string;
  name: string;
  brief: string;
  main_image: string;
  description: string;
  medias: string[];
  href: string;
  templateMedia: string;
}

export type projectDetailsDataT = Record<string, projectDetailsDataItemI>;
