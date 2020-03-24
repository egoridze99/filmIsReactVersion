import { sales } from '../routes/routes';
import { SET_SALES } from '../consts/const';

import * as axios from 'axios';

const getSales = () => dispatch => {
    axios.get(sales)
        .then(data => dispatch({
            type: SET_SALES,
            sales: data.data
        }));
}

export default getSales;