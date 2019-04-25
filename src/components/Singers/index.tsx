import * as React from 'react';
// import * as Style from './index.scss';
import * as classNames from 'classnames'
import Styles from './index.scss';
import {topArtists} from '../../service/http';

export interface Props {
    className?: string;
}
export interface State{
    
}
class Singers extends React.Component<Props, State> {
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
                <div className={Styles.singerPic}>
                    <img src="" alt="" width="100%" height="100%"/>
                </div>
                <p className={Styles.SingerName}></p>
            </div>
        )
    }
    topArtists(){
        topArtists().then((res: any) => {
            console.log(res)
        },(res: any) => {
            console.log(res)
        })
    }
}   
export default Singers;