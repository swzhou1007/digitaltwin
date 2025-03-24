oConfigData = {
    //属性查询在线/离线模式   true/false(在线/离线)
    "propsOnLine": false,
    //地图配置 true/false(显示/隐藏)
    "showLayers": false,
    //视角书签模式：0/1（本地模式-刷新页面后书签清空/后台模式-书签保存到后台）
    "sightMarkerModel": "0",
    //初始视角位置//[经度/纬度/高度]
    "initialPosition": [106.06833, 29.86626, 325.49],
    //初始视角方向,//[heading/pitch/roll] 
    "initialOrientation": [44.78, -31.61, 0.14],
    //地图
    "layers": [{
        "url": "http://t0.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=df306580eb83e8e1423d542052db3990",
        "name": "天地图全球影像服务", //图层名称
        "type": "12" //对应加载方法 详情见文档备注
    }],
    //模型
    "tilesets": {
        //地面
        "dimian": {
            "name": "地面", //名称
            "id": "dimian", //id 固定为dimian
            "url": "./DataSources/bimdimian/tileset.json", //地址
            "scenetreeUrl": "./DataSources/bimdimian/scenetree.json" //要素详细信息json文件
        },
        //管线
        "dixia": {
            "guanxian": {
                "name": "管线", //名称
                "id": "guanxian", //id 固定为guanxian
                "url": "./DataSources/bimdixia/guanxian/tileset.json", //地址
                "scenetreeUrl": "./DataSources/bimdixia/guanxian/scenetree.json" //要素详细信息json文件
            },
            "qita": {
                "name": "其他", //名称
                "id": "qita", //id 固定为guanxian
                "url": "./DataSources/bimdixia/qita/tileset.json", //地址
                "scenetreeUrl": "./DataSources/bimdixia/qita/scenetree.json" //要素详细信息json文件
            }
        },
        //车间（分土建、机电）
        "chejian": {
            //土建
            "tujian": [{
                    "length": "6", // 子文件个数 数值大于1   （没有细分子文件只有一个整体，这项可以不写 ，也可以写1） 
                    "url": "./DataSources/bimchejian/tujian/01/", //路径写到单体编号即可
                    "name": "传达室", //名称
                    "id": "tujian-01", //id固定格式为 tujian+单体编号
                    "label": [{ //标签位置 数组长度代表标签个数
                        "position": [106.072444, 29.870784, 15.2],
                        "name": "传达室"
                    }],
                    "cameraPosition": [106.0724781968819, 29.87118256311986, 53.20303404648295], //单体定位 相机位置
                    "cameraOrientation": ["185.02", "-41.79", "360.00"] //单体定位 相机角度
                },
                {
                    "length": "8",
                    "url": "./DataSources/bimchejian/tujian/02/",
                    "name": "进水分配井",
                    "id": "tujian-02",
                    "label": [{
                        "position": [106.072653, 29.870620, 17],
                        "name": "进水分配井"
                    }],
                    "cameraPosition": [106.07233157502615, 29.871176849871475, 69.06615799590453],
                    "cameraOrientation": ["157.01", "-36.43", "360.00"]
                },
                {
                    "length": "5",
                    "url": "./DataSources/bimchejian/tujian/03/",
                    "name": "沉淀池",
                    "id": "tujian-03",
                    "label": [{
                            "position": [106.072499, 29.869931, 16.2],
                            "name": "沉淀池二期"
                        },
                        {
                            "position": [106.072827, 29.869931, 16.2],
                            "name": "沉淀池一期"
                        }
                    ],
                    "cameraPosition": [106.07341939295426, 29.870333185761186, 101.31400760631331],
                    "cameraOrientation": ["242.01", "-45.20", "360.00"]
                },
                {
                    "length": "6",
                    "url": "./DataSources/bimchejian/tujian/04/",
                    "name": "加药加氯间",
                    "id": "tujian-04",
                    "label": [{
                        "position": [106.073242, 29.870399, 17],
                        "name": "加药加氯间"
                    }],
                    "cameraPosition": [106.07238457287468, 29.870331308369703, 119.8038216647166],
                    "cameraOrientation": ["89.78", "-51.42", "360.00"],
                    "boomOrigin": [106.0732271026, 29.8703907803, 12]
                },
                {
                    "length": "5",
                    "url": "./DataSources/bimchejian/tujian/05/",
                    "name": "砂滤池",
                    "id": "tujian-05",
                    "label": [{
                        "position": [106.072694, 29.869088, 20],
                        "name": "砂滤池"
                    }],
                    "cameraPosition": [106.0723760847051, 29.868547733358366, 103.24504904756627],
                    "cameraOrientation": ["30.42", "-54.62", "360.00"]
                },
                {
                    "length": "4",
                    "url": "./DataSources/bimchejian/tujian/06/",
                    "name": "清水池",
                    "id": "tujian-06",
                    "label": [{
                            "position": [106.071893, 29.870515, 13],
                            "name": "清水池二期"
                        },
                        {
                            "position": [106.071990, 29.869890, 13],
                            "name": "清水池一期"
                        }
                    ],
                    "cameraPosition": [106.07080202744496, 29.870203402483988, 158.2367998336617],
                    "cameraOrientation": ["91.06", "-56.26", "360.00"]
                },
                {
                    "length": "6",
                    "url": "./DataSources/bimchejian/tujian/07/",
                    "name": "送水泵房",
                    "id": "tujian-07",
                    "label": [{
                        "position": [106.071994, 29.869509, 20],
                        "name": "送水泵房"
                    }],
                    "cameraPosition": [106.07116605118293, 29.86937403773719, 119.23403640023082],
                    "cameraOrientation": ["91.06", "-56.26", "360.00"]
                },
                {
                    "length": "3",
                    "url": "./DataSources/bimchejian/tujian/08/",
                    "name": "回流排泥池",
                    "id": "tujian-08",
                    "label": [{
                            "position": [106.073221, 29.868959, 12],
                            "name": "回用水池"
                        },
                        {
                            "position": [106.073220, 29.869197, 12],
                            "name": "排泥池"
                        }
                    ],
                    "cameraPosition": [106.07270720077537, 29.868480019872052, 120.252912466491518],
                    "cameraOrientation": ["30.42", "-54.62", "360.00"]
                },
                {
                    "length": "4",
                    "url": "./DataSources/bimchejian/tujian/09/",
                    "name": "污泥浓缩池",
                    "id": "tujian-09",
                    "label": [{
                            "position": [106.073205, 29.869450, 18],
                            "name": "污泥浓缩池"
                        },
                        {
                            "position": [106.073174, 29.869598, 18],
                            "name": "污泥浓缩池"

                        },
                        {
                            "position": [106.073313, 29.869528, 18],
                            "name": "污泥平衡池"
                        }
                    ],
                    "cameraPosition": [106.07261210850191, 29.86952219701861, 91.24926984369016],
                    "cameraOrientation": ["91.06", "-56.26", "360.00"]
                },
                {
                    "length": "6",
                    "url": "./DataSources/bimchejian/tujian/10/",
                    "name": "脱泥机房",
                    "id": "tujian-10",
                    "label": [{
                        "position": [106.073221, 29.869907, 19],
                        "name": "脱泥机房"
                    }],
                    "cameraPosition": [106.07259295804502, 29.86983921909108, 96.23225502629049],
                    "cameraOrientation": ["91.06", "-56.26", "360.00"]
                },
                {
                    "length": "6",
                    "url": "./DataSources/bimchejian/tujian/11/",
                    "name": "堆场",
                    "id": "tujian-11",
                    "label": [{
                        "position": [106.071872, 29.869011, 20],
                        "name": "堆场"
                    }],
                    "cameraPosition": [106.07188065845473, 29.868549368533284, 106.9329440381341],
                    "cameraOrientation": ["359.53", "-61.22", "360.00"]
                },
                {
                    "url": "./DataSources/bimchejian/tujian/12/",
                    "name": "综合楼",
                    "id": "tujian-12",
                    "label": [{
                        "position": [106.072703, 29.868698, 27],
                        "name": "综合楼"
                    }],
                    "cameraPosition": [106.07201494528185, 29.8677842250495, 91.246885847499035],
                    "cameraOrientation": ["37.33", "-34.56", "360.00"]
                }
            ],
            //机电
            "jidian": [{
                    "url": "./DataSources/bimchejian/jidian/02/",
                    "name": "进水分配井",
                    "id": "jidian-02"
                },
                {
                    "length": 8, // 子文件个数 数值大于1   （没有细分子文件只有一个整体，这项可以不写 ，也可以写1） 
                    "url": "./DataSources/bimchejian/jidian/03/", //路径写到单体编号即可
                    "name": "沉淀池", //名称
                    "id": "jidian-03" //id固定格式为 jidian+单体编号
                },
                {
                    "length": 8,
                    "url": "./DataSources/bimchejian/jidian/04/",
                    "name": "加药加氯间",
                    "id": "jidian-04"
                },
                {
                    "length": 3,
                    "url": "./DataSources/bimchejian/jidian/05/",
                    "name": "砂滤池",
                    "id": "jidian-05"
                },
                {
                    "url": "./DataSources/bimchejian/jidian/06/",
                    "name": "清水池",
                    "id": "jidian-06"
                },
                {
                    "url": "./DataSources/bimchejian/jidian/07/",
                    "name": "送水泵房",
                    "id": "jidian-07"
                },
                {
                    "length": 20,
                    "url": "./DataSources/bimchejian/jidian/08/",
                    "name": "回流排泥池",
                    "id": "jidian-08"
                },
                {

                    "length": 4,
                    "url": "./DataSources/bimchejian/jidian/09/",
                    "name": "污泥浓缩池",
                    "id": "jidian-09"
                },
                {
                    "url": "./DataSources/bimchejian/jidian/10/",
                    "name": "脱泥机房",
                    "id": "jidian-10"
                }
            ]
        }
    },
}