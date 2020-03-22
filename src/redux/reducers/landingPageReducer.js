import { TOGGLE_PRELOADER } from "../consts/const";
import { TOGGLE_MENU } from "../consts/const";

const initialState = {
    isLoaded: false,
    isMenuOpened: false
};

const landingPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PRELOADER:
            return { ...state, isLoaded: true };
        case TOGGLE_MENU:
            !state.isMenuOpened
                ? document.body.classList.add("overflow")
                : document.body.classList.remove("overflow");

            return { ...state, isMenuOpened: !state.isMenuOpened };
        default:
            return state;
    }
};

export default landingPageReducer;
