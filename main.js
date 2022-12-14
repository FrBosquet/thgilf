const prompt = document.getElementById('prompt')

const clear = () => {
  prompt.innerHTML = ""
}
const write = str => {
  prompt.innerHTML = prompt.innerHTML + '<br >' + str
}
const line = () => write('<br />')

const state = {
  room: 'initial',
  actions: [],
  inventory: []
}

const init = () => {
  clear()
  step()
}

document.addEventListener('keydown', (e) => {
  try{
    const option = Number(e.key) - 1
    
    if(option >= 0 && option < state.actions.length){
      const action = state.actions[option]
    console.log('aham');  
      clear()
    console.log('aham 1233', state, action);  
      
      if(action.requires){
        const [type, target, status] = action.requires.split(':')
        
        switch(type) {
          case 'it': {
            if(!state.inventory.includes(target)) {
              write('to ' + action.name + ' you need ' + item.name)
              line()
              return step()
            }
        
          }
        }
        
      }
      
      write('you ' + action.name)
      line()
      
      switch(action.type){
        case 'go': {
      console.log('Hola');
          state.room = action.target
      console.log('Hola 2');
          break
        }
        case 'pick': {
          state.inventory.push(action.target)
          break
        }
      }
      
      step()
    }
  } catch {}
})

const step = () => {
  state.actions = []
  const { description, doors, items} = ROOMS[state.room]
  
  write(description)
  
  doors.forEach(d => {
    write('there is a ' + d.name + ' to the ' + d.where)
    state.actions.push({ name: 'open door', requires: d.requires, type: 'go', target: d.to})
  })
  
  items.forEach(i => {
    if(state.inventory.includes(i.id)) return
    
    const name = ITEMS[i.id].name
    write('there is a ' + name + ' in the ' + i.where)
    state.actions.push({ name: 'pick ' + name, requires: i.requires, type: 'pick', target: i.id})
  })

  line()
  
  state.actions.forEach((a, i) => {
    write(i + 1 + ' - ' + a.name)
  })
  
  line()
  
  if(state.inventory.length) write('You have ' + state.inventory.map(id => ITEMS[id].name).join())
  console.log(state);
}


init()