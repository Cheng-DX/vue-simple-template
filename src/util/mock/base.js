import Mock from 'mockjs'

function repeat(size, template) {
  let data = [];
  for (let i = 0; i < size; i++) {
    data.push(template)
  }
  return data;
}

Mock.mock(
  '/api/test', repeat(10, {
    'id|+1': 1,
    'data': '@name',
  })
);

Mock.mock(
  '/api/address', repeat(10, {
    'id|+1': 1,
    'name': '@county(true)',
  })
)

Mock.mock(
  '/api/switchTypeList', [{
    label: 'None',
    value: '无动画'
  }, {
    label: '淡入淡出1',
    value: 'el-fade-in'
  }, {
    label: '淡入淡出2',
    value: 'el-fade-in-linear'
  }, {
    label: 'Zoom缩放1',
    value: 'el-zoom-in-center'
  }, {
    label: 'Zoom缩放2',
    value: 'el-zoom-in-top'
  }, {
    label: 'Zoom缩放3',
    value: 'el-zoom-in-bottom'
  }, ]
)

Mock.mock(
  '/api/routerTagCloseEventList', [{
      value: 'backToFirst',
      label: '返回至第一个Tag',
    },
    {
      value: 'backToPrev',
      label: '返回至上一个Tag',
    },
    {
      value: 'backToHome',
      label: '返回至首页',
    },
    {
      value: 'none',
      label: '无',
    }
  ]
)

function randomXData(seed) {
  let data = [];
  for (let i = 0; i < seed; i++) {
    data.push(i)
  }
  return data;
}

function randomYData(seed) {
  let data = [];
  for (let i = 0; i < seed; i++) {
    data.push(Math.floor(Math.random() * 1000))
  }
  return data;
}

function randomCharts() {
  let fastModeChartsLength = 4;
  let optionChartsLength = 1;
  let randomSeeds = [];
  let charts = [];

  for (let i = 0; i < fastModeChartsLength + optionChartsLength; i++) {
    randomSeeds.push(Math.floor(Math.random() * 6 + 5))
  }
  for (let i = 0; i < fastModeChartsLength; i++) {
    charts.push({
      id: '@id',
      fastMode: true,
      xData: randomXData(randomSeeds[i]),
      yData: randomYData(randomSeeds[i]),
      title: 'Random Chart' + (i+1),
      label: Math.random() > 0.5 ? true : false,
      type: Math.random() > 0.5 ? 'line' : 'bar',
    })
  }

  var xAxisData = [];
  var data1 = [];
  var data2 = [];
  for (var i = 0; i < 100; i++) {
    xAxisData.push('A' + i);
    data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
  }
  let option = {
    title: {
      text: 'Bar Animation Delay'
    },
    legend: {
      data: ['bar', 'bar2']
    },
    toolbox: {
      // y: 'bottom',
      feature: {
        magicType: {
          type: ['stack']
        },
        dataView: {},
        saveAsImage: {
          pixelRatio: 2
        }
      }
    },
    grid:{
      left: '3%',
      right: '4%',
      bottom: '4%',
      containLabel: true
    },
    tooltip: {},
    xAxis: {
      data: xAxisData,
      splitLine: {
        show: false
      }
    },
    yAxis: {},
    series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        emphasis: {
          focus: 'series'
        },
        animationDelay: function (idx) {
          return idx * 10;
        }
      },
      {
        name: 'bar2',
        type: 'bar',
        data: data2,
        emphasis: {
          focus: 'series'
        },
        animationDelay: function (idx) {
          return idx * 10 + 100;
        }
      }
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
      return idx * 5;
    }
  };
  for (let i = 0; i < optionChartsLength; i++) {
    charts.push({
      id :'@id',
      fastMode: false,
      option: option
    })
  }
  return charts;
}

Mock.mock('/api/charts', randomCharts())