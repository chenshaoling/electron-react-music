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

export interface ISinger{
    accountId: number,
    albumSize: number,
    alias: [],
    briefDesc: string,
    followed: boolean,
    id: number,
    img1v1Id: number,
    img1v1Id_str: string,
    img1v1Url: string,
    musicSize: number,
    name: string,
    picId: number,
    picId_str: string,
    picUrl: string,
    topicPerson: number,
    trans: string
}