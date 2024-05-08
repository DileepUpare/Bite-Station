import { useSearchRestaurants } from "@/api/SearchRestaurantApi";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import noResultsGIF from "@/Assets/images/noResultsGIF.gif"; 
import CuisineFilter from "@/components/CuisineFilter";
import SortOptionDropdown from "./SortOptionDropDown";

export type SearchState = {
   searchQuery: string;
   page: number;
   selectedCuisines: string[];
   sortOption: string;
}

const SearchPage = () => {
   const { city } = useParams();
   const [searchState, setSearchState] = useState<SearchState>({
     searchQuery: "",
     page: 1,
     selectedCuisines: [],
     sortOption: "Best match",
   });

   const [isExpanded, setIsExpanded] = useState<boolean>(false);

   const { results, isLoading } = useSearchRestaurants(searchState, city);

   const setSortOption = (sortOption: string) =>{
       setSearchState((prevState) => ({
        ...prevState,
        sortOption,
        page: 1,
       }))
   }

   const setSelectedCuisines = (selectedCuisines: string[]) => {
     setSearchState((prevState) => ({
        ...prevState,
        selectedCuisines,
        page: 1,
     }))
   }

   const setPage = (page: number) => {
      setSearchState((prevState) => ({
        ...prevState,
        page,
      }));
   };

   const setSearchQuery = (searchFormData: SearchForm) => {
      setSearchState(prevState => ({
         ...prevState,
         searchQuery: searchFormData.searchQuery,
         page: 1,
      }));
   };

   const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      page: 1,
   })); 
   };

   if(isLoading){
     return <span><Spinner className="h-12 w-12 text-gray-900/50 justify-center mt-40 mb-60 ml-[42vw] " onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}/></span>
   }

   if(!results?.data || !city){
      return (
        <img src={noResultsGIF} alt="No Results Found" />
      );
   }

    return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
       <div id="cuisines-list" className="font-goliMedium">
         <CuisineFilter 
           selectedCuisines={searchState.selectedCuisines}
           onChange={setSelectedCuisines}
           isExpanded={isExpanded}
           onExpandedClick={()=> setIsExpanded((prevIsExpanded)=> !prevIsExpanded)}
           /> 
       </div>
       <div id="main-content" className="font-goliMedium flex flex-col gap-5">
        <div></div>
        <SearchBar searchQuery={searchState.searchQuery} onSubmit={setSearchQuery} placeHolder="Search by Cuisine or Restaurant Name"
        onReset={resetSearch}/>

        <div className="font-goliSemiBold flex justify-between flex-col gap-3 lg:flex-row">
        <SearchResultInfo total={results.pagination.total} city={city}/>
        <SortOptionDropdown sortOption={searchState.sortOption} onChange={(value)=> setSortOption(value)}/>
        </div>
        
        {results.data.map((restaurant) =>(
          <SearchResultCard restaurant={restaurant} key={restaurant._id}/>
        ))}
        <PaginationSelector 
        page={results.pagination.page} 
        pages={results.pagination.pages}
        onPageChange={setPage}/>
        <div></div>
       </div>
    </div>
  );
};

export default SearchPage;
