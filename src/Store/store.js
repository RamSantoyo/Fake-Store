import { configureStore } from '@reduxjs/toolkit'
import Favoritos from './Favoritos'
import Category from './Category'
import Car from './Car'

export default configureStore({
  reducer: {
    Favoritos: Favoritos,
    Category: Category,
    Car: Car,
  },
})