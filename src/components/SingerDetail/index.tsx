import * as React from 'react';
// import * as Style from './index.scss';
import * as classNames from 'classnames'
import Styles from './index.scss';
import { instanceOf } from 'prop-types';

export interface Props {
    className?: string;
}
export interface State{
    
}
class SingerDetail extends React.Component<Props, State> {
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
                <div className={Styles.info}>
                    <div className={Styles.pic}></div>
                    <div className={Styles.sideRight}>
                        <div className={Styles.name}></div>
                        <div className={Styles.title}></div>
                        <div className={Styles.intr}></div>
                        <div className={Styles.btns}>

                        </div>
                    </div>
                </div>
                <div className={Styles.list}>
                </div>
            </div>
        )
    }
}   
export default SingerDetail;