import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";
import ContentWrapper from '../../components/ContentWrapper'
import useFetch from "../../hooks/useFetch";
import { fetchDataFromApi } from "../../utils/api";
import Spinner from '../../components/Spinner'
import MovieCard from '../../components/MovieCard'


let filters = {};

const sortbyData = [
    { value: "popularity.desc", label: "Most Popular" },
    { value: "popularity.asc", label: "Least Popular" },
    { value: "vote_average.desc", label: "Highest Rated" },
    { value: "vote_average.asc", label: "Lowest Rated" },
    {
        value: "primary_release_date.desc",
        label: "Newest",
    },
    { value: "primary_release_date.asc", label: "Oldest" },
    { value: "original_title.asc", label: "Title (A-Z)" },
];



const ExplorePage = () => {
  const [data, setData] = useState(null)
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState(null);
  const [sortby, setSortby] = useState(null);
  const {mediaType} = useParams()

  const { data: genresData } = useFetch(`/genre/${mediaType}/list`);

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/discover/${mediaType}`, filters).then((res) => {
        setData(res);
        setPageNum(2);
        setLoading(false);
    });
};

const fetchNextPageData = () => {
    fetchDataFromApi(
        `/discover/${mediaType}?page=${pageNum}`,
        filters
    ).then((res) => {
        if (data?.results) {
            setData({
                ...data,
                results: [...data?.results, ...res.results],
            });
        } else {
            setData(res);
        }
        setPageNum((prev) => prev + 1);
    });
};

useEffect(() => {
  filters = {};
  setData(null);
  setPageNum(1);
  setSortby(null);
  setGenre(null);
  fetchInitialData();
}, [mediaType]);

const onChange = (selectedItems, action) => {
  if (action.name === "sortby") {
      setSortby(selectedItems);
      if (action.action !== "clear") {
          filters.sort_by = selectedItems.value;
      } else {
          delete filters.sort_by;
      }
  }

  if (action.name === "genres") {
      setGenre(selectedItems);
      if (action.action !== "clear") {
          let genreId = selectedItems.map((g) => g.id);
          genreId = JSON.stringify(genreId).slice(1, -1);
          filters.with_genres = genreId;
      } else {
          delete filters.with_genres;
      }
  }

  setPageNum(1);
  fetchInitialData();
};


  return (
    <div className='bg-[#1b2330] pt-[100px] min-h-[700px]'>
      <ContentWrapper>
        <div className='flex flex-col items-start md:flex-row md:items-center justify-between'>
        <span className='text-white text-3xl font-semibold mb-[25px]'>{mediaType === "tv"? "Explore TV Shows" : "Explore Movies"}</span>
        <div className="flex gap-3 flex-col md:flex-row w-full md:w-auto ">
          <div className="w-full md:w-[250px] md:max-w-[500px]">
          <Select
            isMulti
            name="genres"
            value={genre}
            closeMenuOnSelect={false}
            options={genresData?.genres}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            onChange={onChange}
            placeholder="Select genres"
            
            />
            </div>
            <div className="w-full md:w-[200px] md:max-w-[500px]">
              <Select
                name="sortby"
                value={sortby}
                options={sortbyData}
                onChange={onChange}
                isClearable={true}
                placeholder="Sort by"
              />
              </div>
        </div>

        </div>
        <div>
        {loading && (
          <div className='flex items-center justify-center bg-[#1b2330]'>
            <Spinner/>
          </div>
        )}
        {!loading && (
      <>
        {data?.results?.length>0 ? (
         
          
          <InfiniteScroll
          className='flex flex-wrap gap-[10px] md:gap-[20px] py-[50px] pt-2 items-center justify-center'
          dataLength={data?.results?.length || []}
          next={fetchNextPageData}
          hasMore={pageNum < data?.total_pages &&(data?.total_pages != 1)}
          loader={<Spinner/>}
          >
            {data?.results.map((item,index)=>{
              if(item?.media_type === 'person') return;
              return(
                <MovieCard data={item} fromSearch={false} key={index}/>
              )
            })}

          </InfiniteScroll>

        
        ) : 
        (
          <div className='flex h-[450px] items-center justify-center'>
            <span className='text-white text-4xl'>Search result not found!</span>
          </div>
        ) }
        
        
      </>
    )
      
    }
        </div>
      </ContentWrapper>
    </div>

  )
}

export default ExplorePage