type ActionModel = {
    type: string
    payload: any
}

type StateModel = {
    menu_is_open: boolean
}

type Service = {
    id: string;
    image: string;
    title: string;
    listServices: string[];
    href: string;
}

type CleaningServices = {
    id: string;
    title: string;
    imgList: string[];
    description: string;
    innerTxtList: string[];
    img: string;
    text: string
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}