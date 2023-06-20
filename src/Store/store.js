import { configureStore } from '@reduxjs/toolkit'
import Favoritos from './Favoritos'
import Category from './Category'

export default configureStore({
  reducer: {
    Favoritos: Favoritos,
    Category: Category,
  },
})