export type Problem = {
  title: string;
  difficult: number;
  status?: string;
  tags?: [];
  link?: string;
};

export type data = {
  title: string;
  value: Problem[];
};
