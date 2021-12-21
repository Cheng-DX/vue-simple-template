import Mock from 'mockjs'

function repeat(size, template) {
  let data = [];
  for (let i = 0; i < size; i++) {
    data.push(template)
  }
  return data;
}

Mock.mock(
  '/test', repeat(10, {
    'id|+1': 1,
    'data': '@name',
  })
);

Mock.mock(
  '/address', repeat(10, {
    'id|+1': 1,
    'name': '@county(true)',
  })
)

Mock.mock(
  '/switchTypeList', [{
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