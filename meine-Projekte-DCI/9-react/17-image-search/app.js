import React ,{useState}from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/searchBar'
import getIData from './services/pixabay'
import ShowImages from './components/showImages'

const App =()=>{
     const [mainData,setMainData]=useState({
         results:[],
            searchWord:'',
            pageNum:1,
           perPage:4,
            color:''})

    // let [results,searchWord,pageNum,perPage,color] = mainData

   const search=(keyWord)=>{
        if (keyWord) {
            getIData(keyWord,4,1).then(data=>{
                console.log(data);
               setMainData({...mainData,
                    results:[...data.hits],
                    searchWord:keyWord,
                    pageNum:1,
                    perPage:4})
            })
            
        }else{
            setMainData({...mainData,results:[]})
        }
    }

    const goNext=()=>{
            getIData(mainData.searchWord,mainData.perPage,mainData.pageNum+1).then(data=>{
                setMainData({...mainData,
                    pageNum:mainData.pageNum+1,
                    results:[...mainData.results,...data.hits]
                })
            })              
    }
    
        return(
            <div className="container">
                <SearchBar runSearch={search} />
               {mainData.results.length?<ShowImages  images={mainData.results} runNext={goNext}/>:''}
                
            </div>
           
        )
    
}

ReactDOM.render(<App />, document.querySelector('#container'))