import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
    const navLinks = [
        {
            id: 1,
            title: 'Shop',
            route: 'shop'
        },
        {
            id: 1,
            title: 'Sign In',
            route: 'sign-in'
        }
    ];
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    {navLinks.map((navLink) => (
                        <Link className='nav-link' key={navLink.id} to={navLink.route}> {navLink.title} </Link>
                        )
                    )}
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;

// {categories.map((category) => (
//     <CategoryItem key={category.id} category={category} />
//   ))}
