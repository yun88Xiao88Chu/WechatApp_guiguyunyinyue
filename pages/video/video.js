import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoGroupList: [], // 视频标签导航数据
    navId: '', // 导航的标识id
    videoList: [], // 视频列表数据
    triggered: false, // 标识下拉刷新是否被触发
    videoId:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let videoGroupListData = await request('video/group/list');
    this.setData({
      videoGroupList: videoGroupListData.data.slice(0, 14),
      navId: videoGroupListData.data[0].id
    })
    
    //
    this.getVideoList(this.data.navId)
  },
  // 获取视频列表数据的方法
  async getVideoList(navId){
    let videoListData = await request('video/group', {id: navId});
    // 关闭loading提示框
    wx.hideLoading();
    this.setData({
      videoList: videoListData.datas,
      triggered: false // 下拉刷新未触发，关闭下拉刷新
    })
    
    
  },
  //点击导航切换navId
  changeNavId(event){
    // 将str转换成number
    let navId = event.currentTarget.dataset.id>>>0;
    // console.log(navId, typeof navId); // string
    this.setData({
      navId,
      videoList: []
    })
  
    wx.showLoading({
      title: '正在加载'
    })
  
    this.getVideoList(this.data.navId)
  },
  
  // 自定义下拉刷新的回调
  handleRefresherRefresh(){
    console.log('自定义下拉刷新 scroll-view');
    this.getVideoList(this.data.navId)
    
  },
  
  // 上拉触底
  handleScrollToLower(){
    console.log('scroll-view的上拉触底');
    // 发请求拿更多的数据
    let newVideoList = [
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_EA37BE3B086ACEC7401169297E9E56E6",
          "coverUrl": "https://p1.music.126.net/EIn5eEQcUHcHWusa5SKHoQ==/109951164998329648.jpg",
          "height": 1080,
          "width": 1920,
          "title": "最近Fyy翻唱《万有引力》火了，甜心舞枪声BGM，终于找到原曲了！",
          "description": "最近这首《万有引力》刷屏，Fyy完美翻唱，网友：比原唱还好听！翻唱，甜心舞，枪声BGM，流行，华语，爱情。素材电视剧《冰糖炖雪梨》感谢支持关注！",
          "commentCount": 17,
          "shareCount": 9,
          "resolutions": [
            {
              "resolution": 240,
              "size": 11426656
            },
            {
              "resolution": 480,
              "size": 20113801
            },
            {
              "resolution": 720,
              "size": 27661184
            },
            {
              "resolution": 1080,
              "size": 52902864
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 110000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/Q76rD3wVQJwChbk4NME_BA==/109951164195304361.jpg",
            "accountStatus": 0,
            "gender": 0,
            "city": 110101,
            "birthday": -2209017600000,
            "userId": 1848956502,
            "userType": 201,
            "nickname": "达人音乐榜",
            "signature": "盘点好音乐，让快乐常伴你我！",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951164195304370,
            "backgroundImgId": 109951164581973420,
            "backgroundUrl": "http://p1.music.126.net/uNBUuj8ImNcDBhHVbQHN9w==/109951164581973417.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": {
              "1": "音乐视频达人"
            },
            "djStatus": 0,
            "vipType": 10,
            "remarkName": null,
            "avatarImgIdStr": "109951164195304361",
            "backgroundImgIdStr": "109951164581973417",
            "avatarImgId_str": "109951164195304361"
          },
          "urlInfo": {
            "id": "EA37BE3B086ACEC7401169297E9E56E6",
            "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/fMlWAucE_3001469747_uhd.mp4?ts=1591408952&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=nrUwwndSSFLhTlRncwpKGVIDpzFGdvXP&sign=c1adf457820fccc6559d5f50cc4a7e7c&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsUBPXeMOgY+5+9smRI3jpJ5ZjUGb2mwUVpjfqDN8XfXgOlJR47lRDaQOforiCY/r/4ysT2D/0rWxAFpN6o5pnCbO7KF2awM6qXLTD9TYH8HE9DjAz/nGCd9FQIrmqbImjHDDIR2H0DBfTceQYiqMuftUq+LvX60qnoSmgBoqbatVBEeksqrytEnedBndcUW496",
            "size": 52902864,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 1080
          },
          "videoGroup": [
            {
              "id": 262158,
              "name": "万有引力",
              "alg": "groupTagRank"
            },
            {
              "id": 30100,
              "name": "汪苏泷",
              "alg": "groupTagRank"
            },
            {
              "id": 15102,
              "name": "华语音乐",
              "alg": "groupTagRank"
            },
            {
              "id": 12100,
              "name": "流行",
              "alg": "groupTagRank"
            },
            {
              "id": 23116,
              "name": "音乐推荐",
              "alg": "groupTagRank"
            },
            {
              "id": 5100,
              "name": "音乐",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "万有引力",
              "id": 1425626819,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 34097025,
                  "name": "F*yy",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [
                "原唱：汪苏泷"
              ],
              "pop": 100,
              "st": 0,
              "rt": "",
              "fee": 8,
              "v": 14,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 89405876,
                "name": "万有引力",
                "picUrl": "http://p2.music.126.net/PzVklWfH2G1gVuHd3a50Gg==/109951164984873532.jpg",
                "tns": [],
                "pic_str": "109951164984873532",
                "pic": 109951164984873540
              },
              "dt": 243783,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 9753645,
                "vd": -43821
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 5852205,
                "vd": -41271
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 3901485,
                "vd": -39739
              },
              "a": null,
              "cd": "01",
              "no": 1,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 0,
              "s_id": 0,
              "mst": 9,
              "cp": 1416703,
              "mv": 0,
              "rtype": 0,
              "rurl": null,
              "publishTime": 0,
              "privilege": {
                "id": 1425626819,
                "fee": 8,
                "payed": 0,
                "st": 0,
                "pl": 128000,
                "dl": 0,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 999000,
                "fl": 128000,
                "toast": false,
                "flag": 68,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "EA37BE3B086ACEC7401169297E9E56E6",
          "durationms": 146816,
          "playTime": 35796,
          "praisedCount": 136,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_A9691BB5D372DDC686DA20EC64F5A31F",
          "coverUrl": "https://p1.music.126.net/hOc1W0XUvIJx8nTVySF7Tg==/109951164940333344.jpg",
          "height": 1920,
          "width": 1080,
          "title": "有点甜 汪苏泷 Cover",
          "description": "看青你2这首歌全程姨母笑怎么回事\n:.ﾟヽ(*´∀`)ﾉﾟ.:",
          "commentCount": 9,
          "shareCount": 0,
          "resolutions": [
            {
              "resolution": 240,
              "size": 2111577
            },
            {
              "resolution": 480,
              "size": 3510912
            },
            {
              "resolution": 720,
              "size": 5526200
            },
            {
              "resolution": 1080,
              "size": 11321015
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 310000,
            "authStatus": 1,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/DMeo-mAnBL2x5SmHrwAD6g==/109951164294600085.jpg",
            "accountStatus": 0,
            "gender": 2,
            "city": 310101,
            "birthday": 773942400000,
            "userId": 580550859,
            "userType": 4,
            "nickname": "豆豆Katie",
            "signature": "林淑珍 昵称：豆豆Katie\n作品:《Find myself》《Rewrite the Story 》《夏日童话》",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951164294600080,
            "backgroundImgId": 109951164262364910,
            "backgroundUrl": "http://p1.music.126.net/fvmRfEqKkdEvF1XltgnwGA==/109951164262364914.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": {
              "1": "音乐原创视频达人"
            },
            "djStatus": 10,
            "vipType": 11,
            "remarkName": null,
            "avatarImgIdStr": "109951164294600085",
            "backgroundImgIdStr": "109951164262364914",
            "avatarImgId_str": "109951164294600085"
          },
          "urlInfo": {
            "id": "A9691BB5D372DDC686DA20EC64F5A31F",
            "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/8ZCyzQal_2981832966_uhd.mp4?ts=1591408952&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=LKVzXjofNzolmLmXftHNjhcEyGciKJBd&sign=5c24b9ab0c8613da08410e6df95750e1&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsUBPXeMOgY+5+9smRI3jpJ5ZjUGb2mwUVpjfqDN8XfXgOlJR47lRDaQOforiCY/r/4ysT2D/0rWxAFpN6o5pnCbO7KF2awM6qXLTD9TYH8HE9DjAz/nGCd9FQIrmqbImjHDDIR2H0DBfTceQYiqMuftUq+LvX60qnoSmgBoqbatVBEeksqrytEnedBndcUW496",
            "size": 11321015,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 1080
          },
          "videoGroup": [
            {
              "id": -24990,
              "name": "#『华语甜歌』妹子，这歌甜到爆炸了#",
              "alg": "groupTagRank"
            },
            {
              "id": 262158,
              "name": "万有引力",
              "alg": "groupTagRank"
            },
            {
              "id": 59110,
              "name": "国内音乐人",
              "alg": "groupTagRank"
            },
            {
              "id": 24134,
              "name": "弹唱",
              "alg": "groupTagRank"
            },
            {
              "id": 57111,
              "name": "中文翻唱",
              "alg": "groupTagRank"
            },
            {
              "id": 60100,
              "name": "翻唱",
              "alg": "groupTagRank"
            },
            {
              "id": 12100,
              "name": "流行",
              "alg": "groupTagRank"
            },
            {
              "id": 5100,
              "name": "音乐",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "有点甜",
              "id": 165340,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 5538,
                  "name": "汪苏泷",
                  "tns": [],
                  "alias": []
                },
                {
                  "id": 11097,
                  "name": "By2",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": "600902000009331934",
              "fee": 8,
              "v": 47,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 16606,
                "name": "万有引力",
                "picUrl": "http://p2.music.126.net/KUUrg-bbybCdG_EwDSnNFA==/109951164176658680.jpg",
                "tns": [],
                "pic_str": "109951164176658680",
                "pic": 109951164176658690
              },
              "dt": 235200,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 9410395,
                "vd": -1
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 5646254,
                "vd": -1
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 3764184,
                "vd": -1
              },
              "a": null,
              "cd": "1",
              "no": 5,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 1,
              "s_id": 0,
              "mst": 9,
              "cp": 729013,
              "mv": 5331198,
              "rtype": 0,
              "rurl": null,
              "publishTime": 1342368000000,
              "privilege": {
                "id": 165340,
                "fee": 8,
                "payed": 0,
                "st": 0,
                "pl": 128000,
                "dl": 0,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 999000,
                "fl": 128000,
                "toast": false,
                "flag": 68,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "A9691BB5D372DDC686DA20EC64F5A31F",
          "durationms": 37733,
          "playTime": 2356,
          "praisedCount": 26,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_64E3C91C9A4A50AA8AEFDD034D2252DD",
          "coverUrl": "https://p1.music.126.net/zdCCGdMKzjATlBBwKT4pUQ==/109951165019687737.jpg",
          "height": 1080,
          "width": 1920,
          "title": "【亲咬抱抱举高高】你都没有！！！",
          "description": "BGM：万有引力\r\n\r\n甜吗？羡慕吗？都不是你的[流泪]",
          "commentCount": 4,
          "shareCount": 1,
          "resolutions": [
            {
              "resolution": 240,
              "size": 12589572
            },
            {
              "resolution": 480,
              "size": 18049924
            },
            {
              "resolution": 720,
              "size": 23781358
            },
            {
              "resolution": 1080,
              "size": 48215353
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 320000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/EWx34M6nu3yo7gHQTzIEGA==/109951164105778680.jpg",
            "accountStatus": 0,
            "gender": 2,
            "city": 320700,
            "birthday": 817044119528,
            "userId": 470197651,
            "userType": 0,
            "nickname": "粗唐",
            "signature": "（全网统一名:粗唐）\n愿你的身后总有力量，愿你成为自己的力量！",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951164105778690,
            "backgroundImgId": 109951164517683260,
            "backgroundUrl": "http://p1.music.126.net/2XtxE30c2UjP9e__hX9c2g==/109951164517683266.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": null,
            "djStatus": 0,
            "vipType": 0,
            "remarkName": null,
            "avatarImgIdStr": "109951164105778680",
            "backgroundImgIdStr": "109951164517683266",
            "avatarImgId_str": "109951164105778680"
          },
          "urlInfo": {
            "id": "64E3C91C9A4A50AA8AEFDD034D2252DD",
            "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/0Kljee3X_3012985380_uhd.mp4?ts=1591408952&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=jpazNNsdYNPnmmaKOxFEyXHJuehKEnTy&sign=1f95e44da299c81c1b3821ee380df04d&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsUBPXeMOgY+5+9smRI3jpJ5ZjUGb2mwUVpjfqDN8XfXgOlJR47lRDaQOforiCY/r/4ysT2D/0rWxAFpN6o5pnCbO7KF2awM6qXLTD9TYH8HE9DjAz/nGCd9FQIrmqbImjHDDIR2H0DBfTceQYiqMuftUq+LvX60qnoSmgBoqbatVBEeksqrytEnedBndcUW496",
            "size": 48215353,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 1080
          },
          "videoGroup": [
            {
              "id": -14890,
              "name": "#♫「许嵩;徐良;汪苏泷」青春记忆!#",
              "alg": "groupTagRank"
            },
            {
              "id": 262158,
              "name": "万有引力",
              "alg": "groupTagRank"
            },
            {
              "id": 59115,
              "name": "动漫混剪",
              "alg": "groupTagRank"
            },
            {
              "id": 57104,
              "name": "ACG音乐",
              "alg": "groupTagRank"
            },
            {
              "id": 16128,
              "name": "日漫",
              "alg": "groupTagRank"
            },
            {
              "id": 3102,
              "name": "二次元",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "万有引力",
              "id": 165339,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 5538,
                  "name": "汪苏泷",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": "600902000009326914",
              "fee": 8,
              "v": 41,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 16606,
                "name": "万有引力",
                "picUrl": "http://p2.music.126.net/KUUrg-bbybCdG_EwDSnNFA==/109951164176658680.jpg",
                "tns": [],
                "pic_str": "109951164176658680",
                "pic": 109951164176658690
              },
              "dt": 245816,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 9835668,
                "vd": -2
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 5901418,
                "vd": -1
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 3934293,
                "vd": -1
              },
              "a": null,
              "cd": "1",
              "no": 6,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 0,
              "s_id": 0,
              "mst": 9,
              "cp": 729013,
              "mv": 0,
              "rtype": 0,
              "rurl": null,
              "publishTime": 1342368000000,
              "privilege": {
                "id": 165339,
                "fee": 8,
                "payed": 0,
                "st": 0,
                "pl": 128000,
                "dl": 0,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 999000,
                "fl": 128000,
                "toast": false,
                "flag": 68,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "64E3C91C9A4A50AA8AEFDD034D2252DD",
          "durationms": 200448,
          "playTime": 1591,
          "praisedCount": 11,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_92A6F0D48A9A9FA98AB8E1B6924FF2F5",
          "coverUrl": "https://p1.music.126.net/HTPFTLbrTVmyHLitdoEBDA==/109951164992607276.jpg",
          "height": 720,
          "width": 1280,
          "title": "万有引力钢琴版即兴伴奏",
          "description": null,
          "commentCount": 6,
          "shareCount": 2,
          "resolutions": [
            {
              "resolution": 240,
              "size": 1376249
            },
            {
              "resolution": 480,
              "size": 2456221
            },
            {
              "resolution": 720,
              "size": 4279739
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 330000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/3sjd3qJvSAmDvRSRHjcJnQ==/18561955302149942.jpg",
            "accountStatus": 0,
            "gender": 2,
            "city": 330200,
            "birthday": 877276800000,
            "userId": 586243208,
            "userType": 0,
            "nickname": "-少女情怀总是吃_",
            "signature": "半吊子弹唱小可爱",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 18561955302149944,
            "backgroundImgId": 109951164111082050,
            "backgroundUrl": "http://p1.music.126.net/ywboLrSlqy8-Ezt7_83yrA==/109951164111082053.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": null,
            "djStatus": 10,
            "vipType": 0,
            "remarkName": null,
            "avatarImgIdStr": "18561955302149942",
            "backgroundImgIdStr": "109951164111082053",
            "avatarImgId_str": "18561955302149942"
          },
          "urlInfo": {
            "id": "92A6F0D48A9A9FA98AB8E1B6924FF2F5",
            "url": "http://vodkgeyttp9.vod.126.net/cloudmusic/DEdwhGQG_3002857021_shd.mp4?ts=1591408952&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=iTFAyzWVuwTkCednavKHRiDpfVoXvVKt&sign=39381c9cd85dad8f383a2e04a405bb36&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsUBPXeMOgY+5+9smRI3jpJ5ZjUGb2mwUVpjfqDN8XfXgOlJR47lRDaQOforiCY/r/4ysT2D/0rWxAFpN6o5pnCbO7KF2awM6qXLTD9TYH8HE9DjAz/nGCd9FQIrmqbImjHDDIR2H0DBfTceQYiqMuftUq+LvX60qnoSmgBoqbatVBEeksqrytEnedBndcUW496",
            "size": 4279739,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 720
          },
          "videoGroup": [
            {
              "id": -14890,
              "name": "#♫「许嵩;徐良;汪苏泷」青春记忆!#",
              "alg": "groupTagRank"
            },
            {
              "id": 262158,
              "name": "万有引力",
              "alg": "groupTagRank"
            },
            {
              "id": 26117,
              "name": "钢琴",
              "alg": "groupTagRank"
            },
            {
              "id": 57114,
              "name": "钢琴演奏",
              "alg": "groupTagRank"
            },
            {
              "id": 23128,
              "name": "纯音乐",
              "alg": "groupTagRank"
            },
            {
              "id": 15102,
              "name": "华语音乐",
              "alg": "groupTagRank"
            },
            {
              "id": 4103,
              "name": "演奏",
              "alg": "groupTagRank"
            },
            {
              "id": 23116,
              "name": "音乐推荐",
              "alg": "groupTagRank"
            },
            {
              "id": 5100,
              "name": "音乐",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "万有引力",
              "id": 165339,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 5538,
                  "name": "汪苏泷",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": "600902000009326914",
              "fee": 8,
              "v": 41,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 16606,
                "name": "万有引力",
                "picUrl": "http://p2.music.126.net/KUUrg-bbybCdG_EwDSnNFA==/109951164176658680.jpg",
                "tns": [],
                "pic_str": "109951164176658680",
                "pic": 109951164176658690
              },
              "dt": 245816,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 9835668,
                "vd": -2
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 5901418,
                "vd": -1
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 3934293,
                "vd": -1
              },
              "a": null,
              "cd": "1",
              "no": 6,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 0,
              "s_id": 0,
              "mst": 9,
              "cp": 729013,
              "mv": 0,
              "rtype": 0,
              "rurl": null,
              "publishTime": 1342368000000,
              "privilege": {
                "id": 165339,
                "fee": 8,
                "payed": 0,
                "st": 0,
                "pl": 128000,
                "dl": 0,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 999000,
                "fl": 128000,
                "toast": false,
                "flag": 68,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "92A6F0D48A9A9FA98AB8E1B6924FF2F5",
          "durationms": 26000,
          "playTime": 1360,
          "praisedCount": 18,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_E378E588C1E95271C51D46201E75E0B2",
          "coverUrl": "https://p1.music.126.net/b0uWhaeIH44IKFMRA_linw==/109951165014936770.jpg",
          "height": 1280,
          "width": 720,
          "title": "带你去吃草莓冰淇淋",
          "description": null,
          "commentCount": 8,
          "shareCount": 0,
          "resolutions": [
            {
              "resolution": 240,
              "size": 825216
            },
            {
              "resolution": 480,
              "size": 1217051
            },
            {
              "resolution": 720,
              "size": 1780255
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 420000,
            "authStatus": 1,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/F1ez4Q5HRnJ--mC5Reezag==/109951164986673491.jpg",
            "accountStatus": 0,
            "gender": 1,
            "city": 420100,
            "birthday": 1024934400000,
            "userId": 2030141789,
            "userType": 4,
            "nickname": "烤番薯吖",
            "signature": "♪：mama我要吃窝窝头",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951164986673490,
            "backgroundImgId": 109951164545401730,
            "backgroundUrl": "http://p1.music.126.net/ON7Jh-WjRR3WoO-2xLFAlA==/109951164545401726.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": null,
            "djStatus": 10,
            "vipType": 11,
            "remarkName": null,
            "avatarImgIdStr": "109951164986673491",
            "backgroundImgIdStr": "109951164545401726",
            "avatarImgId_str": "109951164986673491"
          },
          "urlInfo": {
            "id": "E378E588C1E95271C51D46201E75E0B2",
            "url": "http://vodkgeyttp9.vod.126.net/cloudmusic/OrgtSYmG_3011450222_shd.mp4?ts=1591408952&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=wNKmrHJJPYBSvcbhkYKXJEFPUIKablmg&sign=65ef9b194ea4630f665a6130d4a66c06&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsUBPXeMOgY+5+9smRI3jpJ5ZjUGb2mwUVpjfqDN8XfXgOlJR47lRDaQOforiCY/r/4ysT2D/0rWxAFpN6o5pnCbO7KF2awM6qXLTD9TYH8HE9DjAz/nGCd9FQIrmqbImjHDDIR2H0DBfTceQYiqMuftUq+LvX60qnoSmgBoqbatVBEeksqrytEnedBndcUW496",
            "size": 1780255,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 720
          },
          "videoGroup": [
            {
              "id": -14890,
              "name": "#♫「许嵩;徐良;汪苏泷」青春记忆!#",
              "alg": "groupTagRank"
            },
            {
              "id": 262158,
              "name": "万有引力",
              "alg": "groupTagRank"
            },
            {
              "id": 24134,
              "name": "弹唱",
              "alg": "groupTagRank"
            },
            {
              "id": 57111,
              "name": "中文翻唱",
              "alg": "groupTagRank"
            },
            {
              "id": 60100,
              "name": "翻唱",
              "alg": "groupTagRank"
            },
            {
              "id": 12100,
              "name": "流行",
              "alg": "groupTagRank"
            },
            {
              "id": 5100,
              "name": "音乐",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "万有引力",
              "id": 165339,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 5538,
                  "name": "汪苏泷",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": "600902000009326914",
              "fee": 8,
              "v": 41,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 16606,
                "name": "万有引力",
                "picUrl": "http://p2.music.126.net/KUUrg-bbybCdG_EwDSnNFA==/109951164176658680.jpg",
                "tns": [],
                "pic_str": "109951164176658680",
                "pic": 109951164176658690
              },
              "dt": 245816,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 9835668,
                "vd": -2
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 5901418,
                "vd": -1
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 3934293,
                "vd": -1
              },
              "a": null,
              "cd": "1",
              "no": 6,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 0,
              "s_id": 0,
              "mst": 9,
              "cp": 729013,
              "mv": 0,
              "rtype": 0,
              "rurl": null,
              "publishTime": 1342368000000,
              "privilege": {
                "id": 165339,
                "fee": 8,
                "payed": 0,
                "st": 0,
                "pl": 128000,
                "dl": 0,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 999000,
                "fl": 128000,
                "toast": false,
                "flag": 68,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "E378E588C1E95271C51D46201E75E0B2",
          "durationms": 24000,
          "playTime": 1276,
          "praisedCount": 18,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_E8DAF1A86E7E8F32EB379F93BB434925",
          "coverUrl": "https://p1.music.126.net/080ZfEJar6ZuwoOmTVnKDw==/109951165022789740.jpg",
          "height": 1920,
          "width": 1080,
          "title": "<万有引力> 要时刻保持甜甜的鸭",
          "description": "希望听到这首轻松的旋律就可以拥有一整天的好心情鸭~",
          "commentCount": 3,
          "shareCount": 0,
          "resolutions": [
            {
              "resolution": 240,
              "size": 5507040
            },
            {
              "resolution": 480,
              "size": 9115672
            },
            {
              "resolution": 720,
              "size": 13541584
            },
            {
              "resolution": 1080,
              "size": 29407454
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 230000,
            "authStatus": 1,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/lTKZtuZyJYBqHHioipsSuA==/7781243790979329.jpg",
            "accountStatus": 0,
            "gender": 1,
            "city": 230600,
            "birthday": 852048000000,
            "userId": 89371650,
            "userType": 4,
            "nickname": "柠檬是绅士",
            "signature": "我们一起颤抖会更明白什么是温柔。",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 7781243790979329,
            "backgroundImgId": 2002210674180202,
            "backgroundUrl": "http://p1.music.126.net/pmHS4fcQtcNEGewNb5HRhg==/2002210674180202.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": null,
            "djStatus": 10,
            "vipType": 11,
            "remarkName": null,
            "avatarImgIdStr": "7781243790979329",
            "backgroundImgIdStr": "2002210674180202"
          },
          "urlInfo": {
            "id": "E8DAF1A86E7E8F32EB379F93BB434925",
            "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/GtvZuujN_3014897901_uhd.mp4?ts=1591408952&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=swmNLqhzbuyJgtHwfZWjKSbKikKZHhhr&sign=dcdbe493bd36af1e8ac7ea46306ae5c6&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsUBPXeMOgY+5+9smRI3jpJ5ZjUGb2mwUVpjfqDN8XfXgOlJR47lRDaQOforiCY/r/4ysT2D/0rWxAFpN6o5pnCbO7KF2awM6qXLTD9TYH8HE9DjAz/nGCd9FQIrmqbImjHDDIR2H0DBfTceQYiqMuftUq+LvX60qnoSmgBoqbatVBEeksqrytEnedBndcUW496",
            "size": 29407454,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 1080
          },
          "videoGroup": [
            {
              "id": 262158,
              "name": "万有引力",
              "alg": "groupTagRank"
            },
            {
              "id": 59110,
              "name": "国内音乐人",
              "alg": "groupTagRank"
            },
            {
              "id": 57111,
              "name": "中文翻唱",
              "alg": "groupTagRank"
            },
            {
              "id": 60100,
              "name": "翻唱",
              "alg": "groupTagRank"
            },
            {
              "id": 12100,
              "name": "流行",
              "alg": "groupTagRank"
            },
            {
              "id": 5100,
              "name": "音乐",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "万有引力",
              "id": 1425626819,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 34097025,
                  "name": "F*yy",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [
                "原唱：汪苏泷"
              ],
              "pop": 100,
              "st": 0,
              "rt": "",
              "fee": 8,
              "v": 14,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 89405876,
                "name": "万有引力",
                "picUrl": "http://p2.music.126.net/PzVklWfH2G1gVuHd3a50Gg==/109951164984873532.jpg",
                "tns": [],
                "pic_str": "109951164984873532",
                "pic": 109951164984873540
              },
              "dt": 243783,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 9753645,
                "vd": -43821
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 5852205,
                "vd": -41271
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 3901485,
                "vd": -39739
              },
              "a": null,
              "cd": "01",
              "no": 1,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 0,
              "s_id": 0,
              "mst": 9,
              "cp": 1416703,
              "mv": 0,
              "rtype": 0,
              "rurl": null,
              "publishTime": 0,
              "privilege": {
                "id": 1425626819,
                "fee": 8,
                "payed": 0,
                "st": 0,
                "pl": 128000,
                "dl": 0,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 999000,
                "fl": 128000,
                "toast": false,
                "flag": 68,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "E8DAF1A86E7E8F32EB379F93BB434925",
          "durationms": 92466,
          "playTime": 1650,
          "praisedCount": 10,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_17EE51E4DE1F649F0BC73C7E1587AD1D",
          "coverUrl": "https://p1.music.126.net/1zqwZF2VEtLVdYY3zMK2lQ==/109951164913399046.jpg",
          "height": 720,
          "width": 1272,
          "title": "万有引力 cover 汪苏泷",
          "description": null,
          "commentCount": 32,
          "shareCount": 5,
          "resolutions": [
            {
              "resolution": 240,
              "size": 2874504
            },
            {
              "resolution": 480,
              "size": 5382769
            },
            {
              "resolution": 720,
              "size": 6040516
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 510000,
            "authStatus": 1,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/J2GT65GCkXu5xpmRzBlIeQ==/109951164418164007.jpg",
            "accountStatus": 0,
            "gender": 1,
            "city": 510500,
            "birthday": 969206400000,
            "userId": 358092872,
            "userType": 4,
            "nickname": "不甜也要钱u",
            "signature": "生活明明朗朗 万物可可爱爱",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951164418164000,
            "backgroundImgId": 109951164026148530,
            "backgroundUrl": "http://p1.music.126.net/b0Bsi1PkBnf6fMxY1g_IPQ==/109951164026148534.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": {
              "1": "音乐视频达人"
            },
            "djStatus": 10,
            "vipType": 11,
            "remarkName": null,
            "avatarImgIdStr": "109951164418164007",
            "backgroundImgIdStr": "109951164026148534",
            "avatarImgId_str": "109951164418164007"
          },
          "urlInfo": {
            "id": "17EE51E4DE1F649F0BC73C7E1587AD1D",
            "url": "http://vodkgeyttp9.vod.126.net/cloudmusic/kX7i7dFO_2973420742_shd.mp4?ts=1591408952&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=vLFDWpnvUosbcpuYbetfjQjynkNbyJrz&sign=395b45919064f59195392845b0c233e4&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsUBPXeMOgY+5+9smRI3jpJ5ZjUGb2mwUVpjfqDN8XfXgOlJR47lRDaQOforiCY/r/4ysT2D/0rWxAFpN6o5pnCbO7KF2awM6qXLTD9TYH8HE9DjAz/nGCd9FQIrmqbImjHDDIR2H0DBfTceQYiqMuftUq+LvX60qnoSmgBoqbatVBEeksqrytEnedBndcUW496",
            "size": 6040516,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 720
          },
          "videoGroup": [
            {
              "id": -14890,
              "name": "#♫「许嵩;徐良;汪苏泷」青春记忆!#",
              "alg": "groupTagRank"
            },
            {
              "id": 262158,
              "name": "万有引力",
              "alg": "groupTagRank"
            },
            {
              "id": 57113,
              "name": "国人男声",
              "alg": "groupTagRank"
            },
            {
              "id": 60100,
              "name": "翻唱",
              "alg": "groupTagRank"
            },
            {
              "id": 12100,
              "name": "流行",
              "alg": "groupTagRank"
            },
            {
              "id": 5100,
              "name": "音乐",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "万有引力",
              "id": 165339,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 5538,
                  "name": "汪苏泷",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": "600902000009326914",
              "fee": 8,
              "v": 41,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 16606,
                "name": "万有引力",
                "picUrl": "http://p2.music.126.net/KUUrg-bbybCdG_EwDSnNFA==/109951164176658680.jpg",
                "tns": [],
                "pic_str": "109951164176658680",
                "pic": 109951164176658690
              },
              "dt": 245816,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 9835668,
                "vd": -2
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 5901418,
                "vd": -1
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 3934293,
                "vd": -1
              },
              "a": null,
              "cd": "1",
              "no": 6,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 0,
              "s_id": 0,
              "mst": 9,
              "cp": 729013,
              "mv": 0,
              "rtype": 0,
              "rurl": null,
              "publishTime": 1342368000000,
              "privilege": {
                "id": 165339,
                "fee": 8,
                "payed": 0,
                "st": 0,
                "pl": 128000,
                "dl": 0,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 999000,
                "fl": 128000,
                "toast": false,
                "flag": 68,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "17EE51E4DE1F649F0BC73C7E1587AD1D",
          "durationms": 49000,
          "playTime": 7677,
          "praisedCount": 192,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_CE7B61749F314064BE1E46A32A571CD0",
          "coverUrl": "https://p1.music.126.net/9n9hsjQcxm_0Q5ktAjuQ9A==/109951164984097697.jpg",
          "height": 720,
          "width": 1280,
          "title": "万有引力（cover汪苏泷）",
          "description": null,
          "commentCount": 4,
          "shareCount": 2,
          "resolutions": [
            {
              "resolution": 240,
              "size": 2668117
            },
            {
              "resolution": 480,
              "size": 4183156
            },
            {
              "resolution": 720,
              "size": 6108614
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 360000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/LuL2N21qzUvzA8kwE47UCA==/109951164756015783.jpg",
            "accountStatus": 0,
            "gender": 2,
            "city": 360300,
            "birthday": 929116800000,
            "userId": 409031748,
            "userType": 204,
            "nickname": "C_陈橙成",
            "signature": "热爱可抵漫长岁月🧡\n合作/进裙私信",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951164756015780,
            "backgroundImgId": 109951164246517600,
            "backgroundUrl": "http://p1.music.126.net/iI_490MvOGE9Wwko2EmKDQ==/109951164246517598.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": null,
            "djStatus": 10,
            "vipType": 11,
            "remarkName": null,
            "avatarImgIdStr": "109951164756015783",
            "backgroundImgIdStr": "109951164246517598",
            "avatarImgId_str": "109951164756015783"
          },
          "urlInfo": {
            "id": "CE7B61749F314064BE1E46A32A571CD0",
            "url": "http://vodkgeyttp9.vod.126.net/cloudmusic/ZkWtG9F2_2998988186_shd.mp4?ts=1591408952&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=tKlRxSRwookzgcEZQcecKrVdatQzBXXG&sign=bc2e08e6517b4d03c1078a1fc6da83cb&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsUBPXeMOgY+5+9smRI3jpJ5ZjUGb2mwUVpjfqDN8XfXgOlJR47lRDaQOforiCY/r/4ysT2D/0rWxAFpN6o5pnCbO7KF2awM6qXLTD9TYH8HE9DjAz/nGCd9FQIrmqbImjHDDIR2H0DBfTceQYiqMuftUq+LvX60qnoSmgBoqbatVBEeksqrytEnedBndcUW496",
            "size": 6108614,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 720
          },
          "videoGroup": [
            {
              "id": -14890,
              "name": "#♫「许嵩;徐良;汪苏泷」青春记忆!#",
              "alg": "groupTagRank"
            },
            {
              "id": 262158,
              "name": "万有引力",
              "alg": "groupTagRank"
            },
            {
              "id": 30100,
              "name": "汪苏泷",
              "alg": "groupTagRank"
            },
            {
              "id": 24134,
              "name": "弹唱",
              "alg": "groupTagRank"
            },
            {
              "id": 57111,
              "name": "中文翻唱",
              "alg": "groupTagRank"
            },
            {
              "id": 60100,
              "name": "翻唱",
              "alg": "groupTagRank"
            },
            {
              "id": 12100,
              "name": "流行",
              "alg": "groupTagRank"
            },
            {
              "id": 5100,
              "name": "音乐",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "万有引力",
              "id": 165339,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 5538,
                  "name": "汪苏泷",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": "600902000009326914",
              "fee": 8,
              "v": 41,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 16606,
                "name": "万有引力",
                "picUrl": "http://p2.music.126.net/KUUrg-bbybCdG_EwDSnNFA==/109951164176658680.jpg",
                "tns": [],
                "pic_str": "109951164176658680",
                "pic": 109951164176658690
              },
              "dt": 245816,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 9835668,
                "vd": -2
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 5901418,
                "vd": -1
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 3934293,
                "vd": -1
              },
              "a": null,
              "cd": "1",
              "no": 6,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 0,
              "s_id": 0,
              "mst": 9,
              "cp": 729013,
              "mv": 0,
              "rtype": 0,
              "rurl": null,
              "publishTime": 1342368000000,
              "privilege": {
                "id": 165339,
                "fee": 8,
                "payed": 0,
                "st": 0,
                "pl": 128000,
                "dl": 0,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 999000,
                "fl": 128000,
                "toast": false,
                "flag": 68,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "CE7B61749F314064BE1E46A32A571CD0",
          "durationms": 48438,
          "playTime": 1381,
          "praisedCount": 32,
          "praised": false,
          "subscribed": false
        }
      }
    ];
    let videoList = this.data.videoList.concat(newVideoList);
    this.setData({
      videoList
    })
  },
  //视频播放.继续播放的回调
  handlePlay(event){
    // console.log("play")
    let {id} = event.currentTarget
    // this.videoContext && id !== this.vid && this.videoContext.stop()
    // if(this.videoContext){
    //   if(id !== this.vid){
    //     this.videoContext.stop();
    //   }
    // }
    
    // this.vid = id
    /* 更新videoId */
    this.setData({
      videoId:id
    })
    this.videoContext = wx.createVideoContext(id)
    this.videoContext.play()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh 页面下拉');
  },
  
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom 页面上拉触底事件的处理函数');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      console.log('hhh');
      return {
        title:'自定义标题',
        path:'/pages/video/video',
        imageUrl:'/static/images/nvsheng.jpg'
      }
  }
})
