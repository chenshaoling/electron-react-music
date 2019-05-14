import * as React from 'react';
// import * as Style from './index.scss';
import * as classNames from 'classnames'
import Styles from './index.scss';

console.log(Styles);

export interface Props {
    className?: string;
}
export interface State{
    scrollToTop: Boolean,
    curIndex: Number
}
class Menu extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
            scrollToTop: false,
            curIndex: 0
        };
    }

    render(){
        let className = classNames(this.props.className, Styles.sec);
        let {curIndex} = this.state;
        return (
            <div className={className}>
                <ul>
                    <li className={Styles.title}>音乐馆</li>
                    <li className={curIndex === 0 ? Styles.current : ''} onClick={this.selectItem.bind(this,1)}>
                        <span className="icon-icon-test2 iconfont"></span>  排行
                    </li>
                    <li className={curIndex === 1 ? Styles.current : ''}>
                        <i className="icon"></i>歌单
                    </li>
                    <li><i className="icon"></i>电台</li>
                    <li><i className="icon"></i>MV</li>

                </ul>
                <ul>
                    <li className={Styles.title}>我的音乐</li>
                    <li><i className="icon"></i>我喜欢</li>
                    <li><i className="icon"></i>本地歌曲</li>
                    <li><i className="icon"></i>下载歌曲</li>
                    <li><i className="icon"></i>播放历史</li>
                </ul>
                <ul>
                    <li className={Styles.title}>创建的歌单</li>
                    <li><i className="icon"></i>XXX</li>
                </ul>
            </div>
        )
    }

    selectItem(index: any){
        this.setState({
            curIndex: index
        })
    }
}   
export default Menu;