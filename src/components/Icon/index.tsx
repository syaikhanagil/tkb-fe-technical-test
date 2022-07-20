import React, { useEffect } from 'react';
import feather from 'feather-icons';

interface IIcon {
    icon: string
}

const Icon = (props: IIcon) => {
    const {icon} = props;

    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <i data-feather={icon} />
    )
}

export default Icon;