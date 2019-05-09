import * as React from 'react';
// import * as Style from './index.scss';
import * as classNames from 'classnames'
import Styles from './index.scss';
import {topArtists} from '../../service/http';
import { ISinger } from '../IViewObject';

export interface Props {
    className?: string;
}
export interface State{
    singers: ISinger[];
}
class Singers extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
            singers: []
        };
    }
    componentWillMount(){
        this.topArtists();
    }
    render(){
        let className = classNames(this.props.className, Styles.sec);
        let { singers } = this.state;

        return (
            <div className={className}>
                {singers.map((item, index) => (this.renderSingers(item, index)))}
                
            </div>
        )
    }
    topArtists(){
        topArtists().then((res: any) => {
            this.setState({
                singers: res.data.artists
            })
        },(res: any) => {
            console.log(res)
        })
    }
    renderSingers(item: any, index: any){
        return(
            <div key={index} className={Styles.singer}>
                <div className={Styles.singerPic}>
                    <img src={item.picUrl} alt="" width="100%" height="100%" />
                </div>
                <p className={Styles.SingerName}>{item.name}</p>
            </div>
        )
    }
}   
export default Singers;