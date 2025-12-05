export type Problem = {
  title: string;
  difficult: number;
  status?: string;
  tags?: string[];
  link?: string;
};

export type data = {
  title: string;
  value: Problem[];
};
