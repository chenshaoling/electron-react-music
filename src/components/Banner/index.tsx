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
          pagination: {
            el:'.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: true,
          loop : true,
          effect : 'coverflow',
          slidesPerView: 2,
          coverflowEffect: {
            rotate: 0,
            stretch: 100,
            depth: 100,
            modifier: 2,
            slideShadows : true
          },
        });
      }
    
    render(){
        let className = classNames(this.props.className, Styles.sec);
        return (
            <div className={className}>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className={classNames("swiper-slide", Styles.slider)}>Slide 1</div>
                    <div className={classNames("swiper-slide", Styles.slider)}>Slide 2</div>
                    <div className={classNames("swiper-slide", Styles.slider)}>Slide 3</div>
                </div>
                <div className="swiper-pagination"></div>
                
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
          </div>
        )
    }
}   
export default Banner;