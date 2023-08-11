import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/slice/authSlice';


function ShowOnLogin({children}) {
    const isLoggedIn =useSelector(selectIsLoggedIn)

    if(isLoggedIn) {
        return children
    }
    return null
}

export default ShowOnLogin;

export function ShowOnLogedOut({children}) {
    const isLoggedIn =useSelector(selectIsLoggedIn)

    if(!isLoggedIn) {
        return children
    }
    return null
}


