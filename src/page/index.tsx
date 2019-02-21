import * as React from 'react';
import * as classNames from 'classnames'
import Styles from './index.scss';
import {Menu} from '../components/index';

export interface Props {
    className?: string;
}
export interface State{
    
}
class App extends React.Component<Props, State> {
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
                113243
                <Menu />
            </div>
        )
    }
}   
export default App;