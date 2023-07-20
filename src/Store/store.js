import { configureStore } from '@reduxjs/toolkit'
import Favoritos from './Favoritos'
import Category from './Category'
import Car from './Car'
import Modalcheck from './Modalcheck'
import Login from './Loginstate'

export default configureStore({
  reducer: {
    Favoritos: Favoritos,
    Category: Category,
    Car: Car,
    Modalcheck: Modalcheck,
    Login: Login,
  },
})