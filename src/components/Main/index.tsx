import * as React from 'react';
import * as classNames from 'classnames'
import Styles from './index.scss';
import {Banner} from '../index';

export interface Props {
    className?: string;
}
export interface State{
    
}
class Main extends React.Component<Props, State> {
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
                <Banner/>
            </div>
        )
    }
}   
export default Main;