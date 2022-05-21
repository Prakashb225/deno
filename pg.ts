import { Application } from 'https://deno.land/x/oak/mod.ts'
import router from './routes.ts'
const HOST = '127.0.0.1'
const PORT = 7700
import { Router }from 'https://deno.land/x/oak/mod.ts'
import { getBooks, getBook, addBook, updateBook, deleteBook } from './controller.ts'

const router = new Router()
router.get('/books', getBooks)
      .get('/books/:isbn', getBook)
      .post('/books', addBook)
      .put('/books/:isbn', updateBook)
      .delete('/books/:isbn', deleteBook)

export default router
const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port ${PORT} ...`)
await app.listen(`${HOST}:${PORT}`)


