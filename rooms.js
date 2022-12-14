const ROOMS = {
  initial: {
    description: 'You are in a dark room',
    doors: [
      {
        name: 'wooden door',
        where: 'north',
        requires: 'it:rusty_key',
        requireMessage: 'Its closed with a lock, needs a key',
        to: 'hallway'
      }
    ],
    items: [
      { id: 'rusty_key', where: 'floor' }
    ]
  },
  hallway: {
    description: 'You are in a big hallway',
    doors: [
      {
        name: 'small door',
        where: 'east',
        to: 'machine_room'
      },
      {
        name: 'mechanical door',
        where: 'west',
        to: 'yard',
        requires: 'ev:machine_room:off',
        requireMessage: 'Its keep locked by some mechanical system'
      },
    ]
  }
}

const ITEMS = {
  rusty_key: {
    name: 'rusty key'
  }
}