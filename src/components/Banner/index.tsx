import * as React from 'react';
import * as classNames from 'classnames'
import Styles from './index.scss';
// import Swiper from 'react-id-swiper';
// import Swiper from 'react-id-swiper';
// import 'react-id-swiper/src/styles/css/swiper.css';


// import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

export interface Props {
    className?: string;
}
export interface State{
    
}

const params = {
    // modules: [Pagination, Navigation],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }
class Banner extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
        };
        // console.log(Swiper)
    }
    componentDidMount(){
        
        var swiper = new Swiper('.swiper-container', {
        //   pagination: '.swiper-pagination',
        //   nextButton: '.swiper-button-next',
        //   prevButton: '.swiper-button-prev',
        //   paginationClickable: true,
          spaceBetween: 30,
          centeredSlides: true,
        //   autoplay: 2500,
        //   autoplayDisableOnInteraction: false
        });
      }
    
    render(){
        let className = classNames(this.props.className, Styles.sec);
        // const [swiper, updateSwiper] = React.useState(null);

        // React.useEffect(
        //     () => {
        //       if (swiper !== null) {
        //         swiper.on("resize", () => {
        //           swiper.params.centeredSlides = window.innerWidth < 900;
        //           swiper.update();
        //         });
        //       }
        //     },
        //     [swiper]
        // );
        return (
            <div className={className}>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                </div>
                <div className="swiper-pagination"></div>
                
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                
                <div className="swiper-scrollbar"></div>
            </div>
               {/* <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">Slide 1</div>
                        <div className="swiper-slide">Slide 2</div>
                        <div className="swiper-slide">Slide 3</div>
                        <div className="swiper-slide">Slide 4</div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div> */}
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