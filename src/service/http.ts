import axios from 'axios';
const HOST = 'http://localhost:3000';

// 获取推荐歌单
export let getRecommendList = (updateTime:any = null) :any => {
  let url = '';
  if (updateTime) {
    url = HOST + `/top/playlist/highquality?before=${updateTime}&limit=30`;
  } else {
    url = HOST + '/top/playlist/highquality?limit=30';
  }
  return axios.get(url);
}


export let banner = ():any => {
  return axios.get(HOST + '/banner');
}