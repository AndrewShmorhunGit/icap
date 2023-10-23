declare module "*.jpg" {
  const path: string;
  export default path;
}

declare module "*.png" {
  const path: string;
  export { path };
}

declare module "*.svg" {
  const path: string;
  export default path;
}

export type TTheme = {
  isMode: string;
  toggleTheme: () => void;
  checkTheme: boolean;
  isLightTheme: boolean;
};

export type TDataResponse = {
  count: number;
  next: string;
  previous: null | unknown;
  results: TPerson[];
};

export type TPerson = {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
};

export type TPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};
