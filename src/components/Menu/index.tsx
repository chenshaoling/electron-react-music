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
const MENU_LIST = [{
    title: '音乐馆',
    menus: [{
        icon: 'icon-icon-test2',
        id: 0,
        name: '排行'
    },{
        icon: 'icon-icon-test15',
        id: 1,
        name: '歌单'
    },{
        icon: 'icon-icon-test13',
        id: 2,
        name: '电台'
    },{
        icon: 'icon-icon-test9',
        id: 3,
        name: 'MV'
    }]
},{
    title: '我的音乐',
    menus: [{
        icon: 'icon-icon-test21',
        id: 4,
        name: '我喜欢'
    },{
        icon: 'icon-icon-test11',
        id: 5,
        name: '本地歌曲'
    },{
        icon: 'icon-icon-test8',
        id: 6,
        name: '下载歌曲'
    },{
        icon: 'icon-icon-test',
        id: 7,
        name: '播放历史'
    }]
}]
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
                        <span className="icon-icon-test2 iconfont"></span>排行
                    </li>
                    <li className={curIndex === 1 ? Styles.current : ''}>
                        <span className="icon-icon-test15 iconfont"></span>歌单
                    </li>
                    <li>
                        <span className="icon-icon-test13 iconfont"></span>电台
                    </li>
                    <li>
                        <span className="icon-icon-test9 iconfont"></span>MV
                    </li>

                </ul>
                <ul>
                    <li className={Styles.title}>我的音乐</li>
                    <li>
                        <span className="icon-icon-test21 iconfont"></span>我喜欢
                    </li>
                    <li>
                        <span className="icon-icon-test11 iconfont"></span>本地歌曲
                    </li>
                    <li>
                        <span className="icon-icon-test8 iconfont"></span>下载歌曲
                    </li>
                    <li>
                        <span className="icon-icon-test iconfont"></span>播放历史
                    </li>
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