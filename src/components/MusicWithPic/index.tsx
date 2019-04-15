import * as React from 'react';
// import * as Style from './index.scss';
import * as classNames from 'classnames'
import Styles from './index.scss';


export interface Props {
    className?: string;
    musicList: []
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
        return (
            <div className={className}>
                <img src="" alt="" width="138" height="138" />
                <div className={Styles.title}>歌曲</div>
            </div>
        )
    }
}   
export default ListWithPic;