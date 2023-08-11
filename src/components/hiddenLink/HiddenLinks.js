import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/slice/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function ShowOnLogin({children}) {
    const isLoggedIn =useSelector(selectIsLoggedIn);
    

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
export function ProtectedRoute() {
    const isLoggedIn =useSelector(selectIsLoggedIn);
    const navigate = useNavigate();

    if(!isLoggedIn) {
        return toast.error("Please Login to use this feature!")
    }
    return navigate("/addExpense")
}


