import React, { useEffect } from 'react'
import { fetchDataFromApi } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getApiConfiguration } from './store/homeSlice';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home';
import Details from './pages/details/Details'
import SearchResult from './pages/searchResult/SearchResult'
import Explore from './pages/explore/Explore'
import PageNotFound from './pages/404/PageNotFound'

const App = () => {

  const dispatch = useDispatch();
  const { url } = useSelector(state => state.home)

  let getData = async () => {
    let fetcheddata = await fetchDataFromApi('/titles')

    
    dispatch(getApiConfiguration(fetcheddata))

  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/:mediaType/:id' element = {<Details/>}/>
        <Route path='/search/:query' element = {<SearchResult/>}/>
        <Route path='/explore/:mediaType' element = {<Explore/>}/>
        <Route path='*' element = {<PageNotFound/>}/>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}


export default App