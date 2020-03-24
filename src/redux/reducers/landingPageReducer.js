import { 
    TOGGLE_PRELOADER,
    TOGGLE_MENU,
    SET_MODAL_VISIBLE,
    SET_MODAL_HIDE,
    SET_NAME,
    SET_TELEFONE,
    SET_SALES
} from "../consts/const";


const initialState = {
    isLoaded: false,
    isMenuOpened: false,
    isModalOpened: false,
    formName: '',
    formTelefone: '',
    sales: []
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
        case SET_MODAL_VISIBLE:
            return{...state, isModalOpened: true};
        case SET_MODAL_HIDE:
            return{...state, isModalOpened: false}
        case SET_NAME:
            return {...state, formName: action.value}
        case SET_TELEFONE:
            return {...state, formTelefone: action.value}
        case SET_SALES:
            return{...state, sales: [...action.sales]};
        default:
            return state;
    }
};

export default landingPageReducer;
