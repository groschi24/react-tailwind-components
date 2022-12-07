import React from 'react';

interface IProps {
    icon: React.ReactNode;
    label: string;
    isDesktopIconOnly?: boolean;
}

function NavBarItemLabel(props: IProps): JSX.Element {
    return (
        <React.Fragment>
            {props.icon}
            <span className={`px-2 transition-colors ${props.isDesktopIconOnly ? 'lg:hidden' : ''}`}>
                {props.label}
            </span>
        </React.Fragment>
    );
}

export default NavBarItemLabel;
