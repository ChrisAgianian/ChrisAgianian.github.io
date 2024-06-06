import Message from "./Message";
import { message, style } from './Message';

const Header = () => {
    return (
        <div className="header1">
            <h1 style={style}>
                <Message />
            </h1>
        </div>
    );

};

export default Header;