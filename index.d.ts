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
    listServices: string[]
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