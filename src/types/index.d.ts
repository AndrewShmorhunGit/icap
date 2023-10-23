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
