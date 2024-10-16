interface blogDetailsDataItemI {
  id: number;
  type: string;
  name: string;
  readTime: string;
  date: string;
  description: string;
  media: string;
  secondDescription: string;
  templateMedia: string;
  brief: string;
  href: string;
}

export type blogDetailsDataT = Record<string, blogDetailsDataItemI>;
