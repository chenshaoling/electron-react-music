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
            scrollToTop: false,
        };
    }

    render(){
        let className = classNames(this.props.className, Styles.sec);
        return (
            <div className={className}>
                <ul>
                    <li className="title">音乐馆</li>
                    <li><i className="icon"></i>排行</li>
                    <li><i className="icon"></i>歌单</li>
                    <li><i className="icon"></i>电台</li>
                    <li><i className="icon"></i>MV</li>

                </ul>
                <ul>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                </ul>
            </div>
        )
    }
}   
export default Menu;