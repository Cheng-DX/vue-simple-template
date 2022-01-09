import Mock from 'mockjs'

import allData from 'assets/testData/allData.json'
import error from 'assets/testData/error.json'
import prop2label from 'assets/testData/prop2label.json'

Mock.mock(
  '/api/getAllData', allData
)
Mock.mock(
  '/api/getErrorData', error
)
Mock.mock(
  '/api/getProp2label', prop2label
)