export function itemToModule(stateItemArray){
  let module = {
    state: {},
    mutations: {}
  }
  
  stateItemArray.forEach(stateItem => {
    Object.assign(module.state, stateItem.state)
    Object.assign(module.mutations, stateItem.mutations)
  })
  return module
}