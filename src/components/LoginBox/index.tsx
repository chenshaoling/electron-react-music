import * as React from 'react';
import * as classNames from 'classnames'
import Styles from './index.scss';

import avator from '../../images/avator.jpg';


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
                <div className={Styles.avator}>
                    <img src={avator} alt="头像" width="100%" height="100%" />
                </div>
                <div className={Styles.name}>名字</div>
                <img className={Styles.medal} src="" alt="等级" width="100%" height="100%" />
            </div>
        )
    }

}   
export default Menu;