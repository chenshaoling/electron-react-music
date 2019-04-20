import * as React from 'react';
// import * as Style from './index.scss';
import * as classNames from 'classnames'
import Styles from './index.scss';
import {search} from '../../service/http';

export interface Props {
    className?: string;
}
export interface State{
    
}
class SearchBox extends React.Component<Props, State> {
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
                <input type="text" placeholder="搜索" onChange={(e)=>{this.search(e)}} />
            </div>
        )
    }

    private search(e: any){
        let keywords = e.value;
        search(keywords).then((res:any) => {
            console.log(res);
        }, (res: any) => {
            console.log(res);
        })
    }
}   
export default SearchBox;