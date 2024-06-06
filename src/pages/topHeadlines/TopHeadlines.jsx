import React, {useState, useEffect} from 'react';
import { fetchDataFromAPi } from '../../utils/axios/axios';
import NewsCard from '../../components/card/NewsCard';
import InfiniteScroll from 'react-infinite-scroll-component';



const TopHeadlines = () => {

  const [country, setCountry] = useState("in")
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)

  const HomePageData= async () => {
    
    const url=`/top-headlines?country=${country}&page=${page}`
    const res = await fetchDataFromAPi(url);
    const data = res?.data?.articles;
    console.log(data)
    if(data){
      setNews((prevData)=> [...prevData, ...data])
      setPage((prev)=> prev + 1)
    }

    // console.log(articles)
  }

  useEffect(()=>{
    HomePageData()
  },[])


  
 

    return (
        <div className='topHeadlines'>
            <InfiniteScroll
              dataLength={news.length}
              hasMore={true}
              next={HomePageData}
            >

            </InfiniteScroll>

            <NewsCard data={news}/>
        </div>
    )

}
export default TopHeadlines;