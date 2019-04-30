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

// 推荐歌单
export let personalized = ():any => {
  return axios.get(HOST + '/personalized');
}

// 热门歌手
export let topArtists = ():any => {
  return axios.get(HOST + '/top/artists?offset=0&limit=5');
}

// 搜索
export let search = (keywords: string):any => {
  return axios.get(HOST + '/search?keywords=' + keywords);
}