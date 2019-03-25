import * as React from 'react';
import * as classNames from 'classnames'
import Styles from './index.scss';



export interface Props {
    className?: string;
}
export interface State{
    
}
class Menu extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
        };
    }

    render(){
        let className = classNames(this.props.className, Styles.sec);
        return (
            <div className={className}>
                <i></i>
                <ul>
                    <li></li>
                </ul>
            </div>
        )
    }
}   
export default Menu;