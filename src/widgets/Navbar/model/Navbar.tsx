import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Menu } from '@features/Menu';

import { Cart } from '../ui/Cart';

interface NavbarProps {
    user?: boolean;
    lang?: boolean;
    theme?: boolean;
    cart?: boolean;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const navigate = useNavigate();

    const location = useLocation();

    const { theme, user, lang, cart = true } = props;

    return (
        <div className='bg-secondary flex h-[72px]'>
            <div className='container mx-auto flex items-center justify-between px-2'>
                <div
                    className='color-primary  cursor-pointer text-xl font-bold'
                    onClick={() => {
                        if (location.pathname !== '/') {
                            navigate(-1);
                        }
                    }}
                    role='presentation'
                >
                    E-Commerce
                </div>
                <div className='flex items-center justify-center gap-1'>
                    {cart && (
                        <div onClick={() => navigate('/cart')} role='presentation'>
                            <Cart className='h-6 w-6 cursor-pointer text-white duration-200 hover:scale-110 hover:ease-in' />
                        </div>
                    )}
                    <div className='relative'>
                        <Menu theme={theme} user={user} lang={lang} />
                    </div>
                </div>
            </div>
        </div>
    );
};
