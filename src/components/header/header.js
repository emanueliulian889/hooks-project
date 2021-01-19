import React from "react";
import Link from "../link/link";

const Header = () => {
    return (
        <div className="ui secondary poiting menu">
            <Link href="/" className='item'>
                Accordion
            </Link>
            <Link href="/list" className='item'>
                Search
            </Link>
            <Link href="/translate" className='item'>
                Translate
            </Link>
            <Link href="/dropdown" className='item'>
                Dropdown
            </Link>
        </div>
    )
}

export default Header;