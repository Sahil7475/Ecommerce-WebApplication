import React from 'react'
import './/header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from './StateProvider'
/* import { Link } from 'react-router-dom/cjs/react-router-dom.min'; */
import { Link } from "react-router-dom";
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }] = useStateValue();

    const handleauthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    const use = user?.email;
    return (
        <div className='header'>
            <Link to="/">
                <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' />
            </Link>


            <div className='header_search'>
                <input className='header_searchinput' type='text'></input>
                <SearchIcon className='header_searchicon' />
                {/* logo */}
            </div>

            <div className='header_nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handleauthentication} className='header_option' >
                        <span className='header_optionLineone'>
                            {user ? 'hello ' + use : 'hello guest'}
                        </span>
                        <span className='header_optionLinetwo'>{user ? 'Sign Out' : 'Sign In'}

                        </span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className='header_option'>
                        <span className='header_optionLineone'>
                            Returns
                        </span>
                        <span className='header_optionLinetwo'>
                            & orders
                        </span>
                    </div>
                </Link>



                <div className='header_option'>
                    <span className='header_optionLineone'>
                        Your
                    </span>
                    <span className='header_optionLinetwo'>
                        prime
                    </span>
                </div>
                <Link to={"/checkout"}>
                    <div className='header_optionbasket'>
                        <img class="carticon" src='https://o.remove.bg/downloads/16d4c7eb-bb6f-440d-a5b7-0a0bb1e7c1a5/carts-removebg-preview.png' alt="" />
                        {/* <ShoppingCartIcon /> */}
                        <span className='header_optionLinetwo header_optionbasketcount'>
                            {basket?.length}
                        </span>
                        <div className='cart'>Cart</div>

                    </div>
                </Link>

            </div>

        </div>

    )
}

export default Header