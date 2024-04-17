import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'
import useFetch from '../../../hooks/useFetch'
import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'

const HeroBanner = () => {
  const [background, setBackground] = useState('')
  const [query, setQuery] = useState('')
  const navigate = useNavigate();

  const { data, loading } = useFetch('/titles/x/upcoming')
  console.log('data2', data)

  useEffect(() => {
    const bg = data?.results?.[Math.floor(Math.random() * 10)]?.primaryImage?.url

    setBackground(bg)
  }, [data])

  const searchQueryHandler = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }
  return (
    <div className='heroBanner'>
      {!loading && <div className="backdrop_img">
        <Img
          src={background}
        />
      </div>}

      <div className="opacity_layer">
        
      </div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="sub_title">Your Fovourite Movies And Tv Shows All At One Place To Discover | Explore Now</span>
          <div className="searchInput">
            <input type="text" placeholder='Search Here' onKeyUp={searchQueryHandler} onChange={(e) => setQuery(e.target.value)} value={query} />
            <button>Search</button>
          </div>
        </div>

      </ContentWrapper>
    </div>
  )
}

export default HeroBanner