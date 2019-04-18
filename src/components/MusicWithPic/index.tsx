import * as React from 'react';
// import * as Style from './index.scss';
import * as classNames from 'classnames'
import Styles from './index.scss';
import {getRecommendList} from '../../service/http';
import {IPersonalized} from '../IViewObject';

export interface Props {
    className?: string;
    musicList: IPersonalized[]
}
export interface State{
    
}
class ListWithPic extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
            scrollToTop: false
        };
    }

    render(){
        let className = classNames(this.props.className, Styles.sec);
        let {musicList} = this.props;
        console.log(musicList)
        return (
            <div className={className}>
                {musicList.map((item, index) => (this.renderList(item, index)))}
            </div>
        )
    }

    renderList(item: any, index: number){
        return (
            <div key={index} className={Styles.item}>
                <img src={item.picUrl} alt="" width="138" height="138" />
                <div className={Styles.title}>{item.name}</div>
            </div>
        )
    }
    
}   
export default ListWithPic;