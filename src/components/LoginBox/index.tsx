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
            scrollToTop: false
        };
    }

    render(){
        let className = classNames(this.props.className, Styles.sec);
        return (
            <div className={className}>
                <div className="avator">
                    <img src="" alt="头像"/>
                </div>
                <div>名字</div>
                <img src="" alt="等级"/>
            </div>
        )
    }
}   
export default Menu;