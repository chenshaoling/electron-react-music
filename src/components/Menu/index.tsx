import * as React from 'react';
// import * as Style from './index.scss';
import * as classNames from 'classnames'
import Styles from './index.css';


console.log(Styles);

export interface Props {
    className?: string;
}
export interface State{
    
}
class Menu extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
            scrollToTop: false
        };
    }

    render(){
        let className = classNames(this.props.className, Styles.sec);
        return (
            <div className={className}>
                menu
            </div>
        )
    }
}   
export default Menu;