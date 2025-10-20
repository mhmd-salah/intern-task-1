import "react-i18next";
import { Resources } from "./i18n/resources";

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: Resources["en"];
  }
}
