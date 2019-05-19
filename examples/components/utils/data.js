 const LINE = {
     lineNormal: [{
         date: "2017-06-05",
         value: 116
     }, {
         date: "2017-06-06",
         value: 129
     }, {
         date: "2017-06-07",
         value: 135
     }, {
         date: "2017-06-08",
         value: 86
     }, {
         date: "2017-06-09",
         value: 73
     }, {
         date: "2017-06-10",
         value: 85
     }, {
         date: "2017-06-11",
         value: 73
     }, {
         date: "2017-06-12",
         value: 68
     }, {
         date: "2017-06-13",
         value: 92
     }, {
         date: "2017-06-14",
         value: 130
     }, {
         date: "2017-06-15",
         value: 245
     }, {
         date: "2017-06-16",
         value: 139
     }, {
         date: "2017-06-17",
         value: 115
     }, {
         date: "2017-06-18",
         value: 111
     }, {
         date: "2017-06-19",
         value: 309
     }, {
         date: "2017-06-20",
         value: 206
     }, {
         date: "2017-06-21",
         value: 137
     }, {
         date: "2017-06-22",
         value: 128
     }, {
         date: "2017-06-23",
         value: 85
     }, {
         date: "2017-06-24",
         value: 94
     }, {
         date: "2017-06-25",
         value: 71
     }, {
         date: "2017-06-26",
         value: 106
     }, {
         date: "2017-06-27",
         value: 84
     }, {
         date: "2017-06-28",
         value: 93
     }, {
         date: "2017-06-29",
         value: 85
     }, {
         date: "2017-06-30",
         value: 73
     }, {
         date: "2017-07-01",
         value: 83
     }, {
         date: "2017-07-02",
         value: 125
     }, {
         date: "2017-07-03",
         value: 107
     }, {
         date: "2017-07-04",
         value: 82
     }, {
         date: "2017-07-05",
         value: 44
     }, {
         date: "2017-07-06",
         value: 72
     }, {
         date: "2017-07-07",
         value: 106
     }, {
         date: "2017-07-08",
         value: 107
     }, {
         date: "2017-07-09",
         value: 66
     }, {
         date: "2017-07-10",
         value: 91
     }, {
         date: "2017-07-11",
         value: 92
     }, {
         date: "2017-07-12",
         value: 113
     }, {
         date: "2017-07-13",
         value: 107
     }, {
         date: "2017-07-14",
         value: 131
     }, {
         date: "2017-07-15",
         value: 111
     }, {
         date: "2017-07-16",
         value: 64
     }, {
         date: "2017-07-17",
         value: 69
     }, {
         date: "2017-07-18",
         value: 88
     }, {
         date: "2017-07-19",
         value: 77
     }, {
         date: "2017-07-20",
         value: 83
     }, {
         date: "2017-07-21",
         value: 111
     }, {
         date: "2017-07-22",
         value: 57
     }, {
         date: "2017-07-23",
         value: 55
     }, {
         date: "2017-07-24",
         value: 60
     }],
     pointLine: [{
         day: '周一',
         value: 300
     }, {
         day: '周二',
         value: 400
     }, {
         day: '周三',
         value: 350
     }, {
         day: '周四',
         value: 500
     }, {
         day: '周五',
         value: 490
     }, {
         day: '周六',
         value: 600
     }, {
         day: '周日',
         value: 900
     }],
 }


 const HISTOGRAM = {
     normalData: [{
             year: "1951 年",
             sales: 38
         },
         {
             year: "1952 年",
             sales: 52
         },
         {
             year: "1956 年",
             sales: 61
         },
         {
             year: "1957 年",
             sales: 145
         },
         {
             year: "1958 年",
             sales: 48
         },
         {
             year: "1959 年",
             sales: 38
         },
         {
             year: "1960 年",
             sales: 38
         },
         {
             year: "1962 年",
             sales: 38
         }
     ],
     groupData: [{
             name: "London",
             月份: "Jan.",
             月均降雨量: 18.9
         },
         {
             name: "London",
             月份: "Feb.",
             月均降雨量: 28.8
         },
         {
             name: "London",
             月份: "Mar.",
             月均降雨量: 39.3
         },
         {
             name: "London",
             月份: "Apr.",
             月均降雨量: 81.4
         },
         {
             name: "London",
             月份: "May.",
             月均降雨量: 47
         },
         {
             name: "London",
             月份: "Jun.",
             月均降雨量: 20.3
         },
         {
             name: "London",
             月份: "Jul.",
             月均降雨量: 24
         },
         {
             name: "London",
             月份: "Aug.",
             月均降雨量: 35.6
         },
         {
             name: "Berlin",
             月份: "Jan.",
             月均降雨量: 12.4
         },
         {
             name: "Berlin",
             月份: "Feb.",
             月均降雨量: 23.2
         },
         {
             name: "Berlin",
             月份: "Mar.",
             月均降雨量: 34.5
         },
         {
             name: "Berlin",
             月份: "Apr.",
             月均降雨量: 99.7
         },
         {
             name: "Berlin",
             月份: "May.",
             月均降雨量: 52.6
         },
         {
             name: "Berlin",
             月份: "Jun.",
             月均降雨量: 35.5
         },
         {
             name: "Berlin",
             月份: "Jul.",
             月均降雨量: 37.4
         },
         {
             name: "Berlin",
             月份: "Aug.",
             月均降雨量: 42.4
         }
     ],
     // 区间柱状图数据
     betweenData: [{
             x: "分类一",
             y: [76, 100]
         },
         {
             x: "分类二",
             y: [56, 108]
         },
         {
             x: "分类三",
             y: [38, 129]
         },
         {
             x: "分类四",
             y: [58, 155]
         },
         {
             x: "分类五",
             y: [45, 120]
         },
         {
             x: "分类六",
             y: [23, 99]
         },
         {
             x: "分类七",
             y: [18, 56]
         },
         {
             x: "分类八",
             y: [18, 34]
         }
     ],

 }


 const PIE = {
     data: [{
             name: "芳华",
             percent: 0.4
         },
         {
             name: "妖猫传",
             percent: 0.2
         },
         {
             name: "机器之血",
             percent: 0.18
         },
         {
             name: "心理罪",
             percent: 0.15
         },
         {
             name: "寻梦环游记",
             percent: 0.05
         },
         {
             name: "其他",
             percent: 0.02
         }
     ]
 }


 const RADAR = {
     normalData: [{
         item: 'Design',
         user: '用户 A',
         score: 70
     }, {
         item: 'Design',
         user: '用户 B',
         score: 30
     }, {
         item: 'Development',
         user: '用户 A',
         score: 60
     }, {
         item: 'Development',
         user: '用户 B',
         score: 70
     }, {
         item: 'Marketing',
         user: '用户 A',
         score: 50
     }, {
         item: 'Marketing',
         user: '用户 B',
         score: 60
     }, {
         item: 'Users',
         user: '用户 A',
         score: 40
     }, {
         item: 'Users',
         user: '用户 B',
         score: 50
     }, {
         item: 'Test',
         user: '用户 A',
         score: 60
     }, {
         item: 'Test',
         user: '用户 B',
         score: 70
     }, {
         item: 'Language',
         user: '用户 A',
         score: 70
     }, {
         item: 'Language',
         user: '用户 B',
         score: 50
     }, {
         item: 'Technology',
         user: '用户 A',
         score: 70
     }, {
         item: 'Technology',
         user: '用户 B',
         score: 40
     }, {
         item: 'Support',
         user: '用户 A',
         score: 60
     }, {
         item: 'Support',
         user: '用户 B',
         score: 40
     }],
     imageData: [{
         item: '投资经验',
         score: 90,
         img: 'https://gw.alipayobjects.com/zos/rmsportal/txPVjdlnLANzxmwZcchu.png'
     }, {
         item: '财务状况',
         score: 80,
         img: 'https://gw.alipayobjects.com/zos/rmsportal/UMqgEqZdEcPhRekNGAdc.png'
     }, {
         item: '风险承受能力',
         score: 70,
         img: 'https://gw.alipayobjects.com/zos/rmsportal/eBXrRufzPGlOisYGZwnv.png'
     }, {
         item: '风险偏好',
         score: 75,
         img: 'https://gw.alipayobjects.com/zos/rmsportal/zqqWMLXrFwnqhySFHVjZ.png'
     }, {
         item: '投资规划',
         score: 60,
         img: 'https://gw.alipayobjects.com/zos/rmsportal/DxcRoUZXpYOzAWKrlRvv.png'
     }]
 }


 const POINT = {
     bubbleData: [{
         x: 95,
         y: 95,
         z: 13.8,
         name: 'BE',
         country: 'Belgium'
     }, {
         x: 86.5,
         y: 102.9,
         z: 14.7,
         name: 'DE',
         country: 'Germany'
     }, {
         x: 80.8,
         y: 91.5,
         z: 15.8,
         name: 'FI',
         country: 'Finland'
     }, {
         x: 80.4,
         y: 102.5,
         z: 12,
         name: 'NL',
         country: 'Netherlands'
     }, {
         x: 80.3,
         y: 86.1,
         z: 11.8,
         name: 'SE',
         country: 'Sweden'
     }, {
         x: 78.4,
         y: 70.1,
         z: 16.6,
         name: 'ES',
         country: 'Spain'
     }, {
         x: 74.2,
         y: 68.5,
         z: 14.5,
         name: 'FR',
         country: 'France'
     }, {
         x: 73.5,
         y: 83.1,
         z: 10,
         name: 'NO',
         country: 'Norway'
     }, {
         x: 71,
         y: 93.2,
         z: 24.7,
         name: 'UK',
         country: 'United Kingdom'
     }, {
         x: 69.2,
         y: 57.6,
         z: 10.4,
         name: 'IT',
         country: 'Italy'
     }, {
         x: 68.6,
         y: 20,
         z: 16,
         name: 'RU',
         country: 'Russia'
     }, {
         x: 65.5,
         y: 126.4,
         z: 35.3,
         name: 'US',
         country: 'United States'
     }, {
         x: 65.4,
         y: 50.8,
         z: 28.5,
         name: 'HU',
         country: 'Hungary'
     }, {
         x: 63.4,
         y: 51.8,
         z: 15.4,
         name: 'PT',
         country: 'Portugal'
     }, {
         x: 64,
         y: 82.9,
         z: 31.3,
         name: 'NZ',
         country: 'New Zealand'
     }]
 }
 export {
     LINE,
     HISTOGRAM,
     PIE,
     RADAR,
     POINT
 }