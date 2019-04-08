import * as React from 'react';
import * as classNames from 'classnames'
import Styles from './index.scss';
// import Swiper from 'react-id-swiper';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';

// import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'


export interface Props {
    className?: string;
}
export interface State{
    
}

// const params = {
//     modules: [Pagination, Navigation],
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev'
//     },
//     spaceBetween: 30
//   }
class Banner extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
        };
        console.log(Swiper)
    }
    
    
    render(){
        let className = classNames(this.props.className, Styles.sec);
        // const [swiper, updateSwiper] = React.useState(null);

        return (
            <div className={className}>
                <Swiper>
                    <div>Slide 1</div>
                    <div>Slide 2</div>
                    <div>Slide 3</div>
                    <div>Slide 4</div>
                    <div>Slide 5</div>
                </Swiper>
                {/* <button onClick={this.goPrev.bind(this, swiper)}>Prev</button>
                <button onClick={this.goNext.bind(this, swiper)}>Next</button> */}
            </div>
        )
    }
    goNext(swiper: any){
        if (swiper !== null) {
          swiper.slideNext();
        }
    };
     
    goPrev(swiper: any){
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };
}   
export default Banner;