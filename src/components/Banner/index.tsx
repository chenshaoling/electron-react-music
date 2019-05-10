import * as React from 'react';
import * as classNames from 'classnames'
import Styles from './index.scss';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import {banner} from '../../service/http';
import {IBanner} from "../IViewObject";

export interface Props {
    className?: string;
}
export interface State{
    banners: IBanner[]
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
          banners: []
        };
        // console.log(Swiper)
    }
    componentWillMount(){
        banner().then((res: any)=>{
          this.setState({
            banners: res.data.banners
          })
        });
    }
    componentDidUpdate(){
      console.log(11)
        var swiper = new Swiper('.swiper-container', {
          pagination: {
            el:'.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          // spaceBetween: 30,
          centeredSlides: true,
          autoplay: true,
          loop : true,
          effect : 'coverflow',
          slidesPerView: 2,
          coverflowEffect: {
            rotate: 1,
            stretch: 64,
            depth: 100,
            modifier: 2,
            slideShadows : true
          },
        });
      }
    
    render(){
        let className = classNames(this.props.className, Styles.sec);
        let {banners} = this.state;

        return (
            <div className={className}>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {banners.map((item, index)=>(
                    this.renderbanners(item, index)
                  ))}
                </div>
                <div className="swiper-pagination"></div>
                
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
          </div>
        )
    }
    renderbanners(item: any, index: any){
        return(
          <div className={classNames("swiper-slide", Styles.slider)} key={index}>
            <img src={item.imageUrl} />
          </div>
          )
    }
    
}    
export default Banner;