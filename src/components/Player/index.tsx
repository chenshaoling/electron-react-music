import * as React from 'react';
// import * as Style from './index.scss';
import * as classNames from 'classnames'
import Styles from './index.scss';


export interface Props {
    className?: string;
}
export interface State{
    
}
class Player extends React.Component<Props, State> {
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
            </div>
        )
    }
}   
export default Player;