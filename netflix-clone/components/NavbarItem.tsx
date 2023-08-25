import React from 'react'

interface NavbarItemProps {
    label: string
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }: NavbarItemProps) => {
    return (
        <div className='hover:text-grey-300 cursor-pointer text-white transition'>
            {label}
        </div>
    )
}

export default NavbarItem
