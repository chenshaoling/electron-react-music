/**
 * banner
 */
export interface  IBanner {
    imgUrl: string
}

/**
 * 推荐歌单
 */
export interface IPersonalized{
    alg: string,
    canDislike: boolean,
    copywriter: string,
    highQuality: boolean,
    id: number,
    name: string,
    picUrl: string,
    playCount: number,
    trackCount: number,
    type: number,
}