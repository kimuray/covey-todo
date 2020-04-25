import Dexie from 'dexie'

const db = new Dexie("covey-todo-db")
db.version(1).stores({
  roles: "++id"
})

export default db
