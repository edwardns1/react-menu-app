import "../../App.css"
import Menu from "../Menu"

const MenuApp = (props) => {
    return (
        <div className="App">
            {props.data.map((menu) => (
                <Menu key={menu.menuName} menuName={menu.menuName} menuItems={menu.menuItems} />
            ))}
        </div>
    );
};

export default MenuApp;