export type TFontItem = {
  fontName: string;
  fontFamily: string;
  directory: string;
  lang: string[];
  multiWeight: "VF" | "disperse" | false;
  variables?: string[];
  previewText?: string;
};
