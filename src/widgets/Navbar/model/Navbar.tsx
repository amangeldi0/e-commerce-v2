import { FC } from 'react';

import { Menu } from '@features/Menu';

import { Cart } from '../ui/Cart';

interface NavbarProps {
    user?: boolean;
    lang?: boolean;
    theme?: boolean;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { theme, user, lang } = props;

    return (
        <div className='bg-secondary flex h-[72px]'>
            <div className='container mx-auto flex items-center justify-between px-2'>
                <div className='color-primary  cursor-pointer text-xl font-bold'>E-Commerce</div>
                <div className='flex items-center justify-center gap-1'>
                    <Cart className='h-6 w-6 cursor-pointer text-white duration-200 hover:scale-110 hover:ease-in' />
                    <div className='relative'>
                        <Menu theme={theme} user={user} lang={lang} />
                    </div>
                </div>
            </div>
        </div>
    );
};
