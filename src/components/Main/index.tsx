import * as React from 'react';
import * as classNames from 'classnames'
import Styles from './index.scss';
import {Banner, MusicWithPic} from '../index';

export interface Props {
    className?: string;
}
export interface State{

    musicList: []
}
class Main extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
            musicList: []
        };
    }

    render(){
        let className = classNames(this.props.className, Styles.sec);
        let { musicList } = this.state;
        return (
            <div className={className}>
                <Banner/>
                <MusicWithPic musicList={musicList}/>
            </div>
        )
    }
}   
export default Main;