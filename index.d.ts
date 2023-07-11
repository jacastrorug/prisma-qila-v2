import { ReactElement } from "react";
import { IconType } from "react-icons";
declare global {
  type ActionModel = {
    type: string;
    payload: any;
  };

  type StateModel = {
    menu_is_open: boolean;
  };

  type Service = {
    id: string;
    image: string;
    title: string;
    listServices: string[];
    href: string;
  };

  type CleaningServicesProps = {
    id: string;
    title: string;
    imgList: string[];
    description: string;
    innerTxtList: string[];
    img: string;
    text: string;
    icon: IconType;
  };

  interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }

  interface Window {
    $: any;
    jQuery: any;
  }

  type StateModel = {
    menu_is_open: boolean;
  };

  type Position =
    | Globals
    | "-webkit-sticky"
    | "absolute"
    | "fixed"
    | "relative"
    | "static"
    | "sticky";
}
