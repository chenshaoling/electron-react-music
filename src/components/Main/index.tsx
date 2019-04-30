import * as React from 'react';
import * as classNames from 'classnames'
import Styles from './index.scss';
import {Banner, MusicWithPic, TopBar, Singers} from '../index';
import {personalized} from '../../service/http';
import {IPersonalized} from '../IViewObject';

export interface Props {
    className?: string;
}
export interface State{
    musicList: IPersonalized[]
}
class Main extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
            musicList: []
        };
    }

    componentWillMount(){
        this.getPersonalized();
    }

    render(){
        let className = classNames(this.props.className, Styles.sec);
        let { musicList } = this.state;
        return (
            <div className={className}>
                <TopBar/>
                <Banner/>
                <div>
                    <p>推荐歌单</p>
                    <MusicWithPic musicList={musicList}/>
                </div>
                <Singers/>
            </div>
        )
    }

    getPersonalized(){
        personalized().then((res: any)=> {
            // if(res.code === 200){
                let musicList = res.data.result;
                musicList.length = 5;
                this.setState({
                    musicList: musicList
                })
                // this.forceUpdate();
            // }
        })
    }
}   
export default Main;