import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LangIcon } from '@shared/assets/LangIcon';
import { SettingsIcon } from '@shared/assets/SettingsIcon';
import { ThemDarkIcon } from '@shared/assets/ThemDarkIcon';
import { ThemLightIcon } from '@shared/assets/ThemLightIcon';
import { UserIcon } from '@shared/assets/UserIcon';
import { useOutsideClick } from '@shared/hooks/useOutsideClick';
import { useTheme } from '@shared/hooks/useTheme';

interface MenuProps {
    user?: boolean;
    lang?: boolean;
    theme?: boolean;
}

export const Menu: FC<MenuProps> = (props) => {
    const { t, i18n } = useTranslation();

    const { user = true, lang = true, theme = true } = props;

    const { ref, show, setShow } = useOutsideClick(false);

    const changeLang = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    const { theme: changeTheme, toggleTheme } = useTheme();

    return (
        <div ref={ref}>
            <button
                className='inline-flex items-center rounded-lg px-4
                    py-2.5 text-center text-sm font-medium text-white
                    duration-200 hover:scale-110 focus:outline-none'
                type='button'
                onClick={() => setShow((prevState) => !prevState)}
            >
                <SettingsIcon className='animation: h-6 w-6  hover:animate-spin' />
            </button>

            <div
                className={`z-10 ${
                    !show ? 'hidden' : ''
                } absolute right-[5px] mt-6  w-40 rounded-lg bg-white shadow`}
            >
                <div className='py-2 text-sm text-gray-700' aria-labelledby='dropdownDefault'>
                    <div className='px-2 text-center'>
                        {user && (
                            <div className='block flex cursor-pointer items-center justify-center gap-2.5 rounded px-2 py-2 capitalize hover:bg-gray-100'>
                                {t('user')}
                                <UserIcon className='h-[18px] w-[18px] text-black' />
                            </div>
                        )}

                        {lang && (
                            <div
                                onClick={changeLang}
                                role='presentation'
                                className='block flex cursor-pointer items-center justify-center gap-2.5 rounded px-2 py-2 capitalize hover:bg-gray-100'
                            >
                                {t('lang')}
                                <LangIcon className='h-[18px] w-[18px] text-black' />
                            </div>
                        )}
                        {theme && (
                            <div
                                onClick={toggleTheme}
                                role='presentation'
                                className='block flex cursor-pointer items-center justify-center gap-2.5 rounded px-2 py-2 capitalize hover:bg-gray-100'
                            >
                                {t('theme')}
                                {changeTheme === 'light' ? (
                                    <ThemLightIcon className='h-[18px] w-[18px] text-black' />
                                ) : (
                                    <ThemDarkIcon className='h-[18px] w-[18px] text-black' />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
