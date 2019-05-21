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
    curId: Number
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
            curId: 0
        };
    }

    render(){
        let className = classNames(this.props.className, Styles.sec);
        let {curId} = this.state;
        return (
            <div className={className}>
                {MENU_LIST.map((type: any, index: any)=>(this.renderTypes(type, index)))}
            </div>
        )
    }

    selectItem(id: any){
        this.setState({
            curId: id
        })
    }

    renderTypes(type: any, index: any){
        return(
            <ul key={index} >
                <li className={Styles.title}>{type.title}</li>
                {type.menus.map((item: any, index: any)=>(this.renderList(item, index)))}
            </ul>
            
        )
    }
    renderList(item: any, index: any){
        let {curId} = this.state;

        return(
            <li key={index} onClick={()=>(this.selectItem(item.id))} className={curId === item.id ? Styles.current : ''} ><span className={classNames(item.icon, 'iconfont')}></span>{item.name}</li>
        )
    }
}   
export default Menu;