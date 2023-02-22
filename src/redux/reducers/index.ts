import { TOOGLE_MENU } from "../types";

const INITIAL_STATE: StateModel = {
    menu_is_open: false
};

const reducer = (state: StateModel = INITIAL_STATE, action: ActionModel) => {
    switch (action.type) {
        case TOOGLE_MENU:
            return { ...state, menu_is_open: !state.menu_is_open };
        default:
            return state;
    }
};

export default reducer;