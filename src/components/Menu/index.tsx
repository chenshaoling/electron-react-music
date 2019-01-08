import * as React from 'react';
// import * as Style from './index.scss';
import * as classNames from 'classnames'
import Style from './index';

console.log(Style)

export interface Props {
    className: string;
}
export interface State{
    
}
class Menu extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
            scrollToTop: false
        };
    }

    render(){
        let className = classNames(this.props.className);
        return (
            <div className={className}>

            </div>
        )
    }
}   
export default Menu;