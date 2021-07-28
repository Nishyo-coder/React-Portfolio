import React from 'react';
import { MenuItems} from "./MenuItems"

class Header extends Component {
    render() {
        return(
        <nav className="NavbarItems">
            <div className="menu-icon">

            </div>
            <ul>
                {MenuItems.map((item, index) => {
                    return (
                <li key={index}>
                <a className={items.cName} href={item.url}>
                    {item.title}
                    </a>
                    </li>
                    )
                })}
    
            </ul>
        </nav>
        )

    }
}

export default Header