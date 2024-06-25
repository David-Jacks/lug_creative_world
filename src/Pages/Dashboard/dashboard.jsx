import Articlecard from "../../components/Articlecard/articlecard";
import Topbar from "../../components/Topbar/topbar";
import "./dashboard.css";
import top_author_default_img from "../../images/profilevactor.jpg";
import {
  fetchPostData,
  getToppost,
  getTopAuthors,
  getArticleByCat,
  getArticleByTitle
} from "../../api";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../../components/Modals/loadingmodal/loading";
import { memo, useCallback, useEffect, useState } from "react";
import Articlelist from "../../components/Articlelist/articlelist";
import { categories } from "../../cat";

const Dashboard = memo(() => {
  const [searchresult, setSearchResult] = useState();
  const [searching, setSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [titleQuery, setTitleQuery] = useState("");
  const [articleData, setArticleData] = useState([]);
  const [topData, setTopdata] = useState([]);
  const [topauthors, setTopauthor] = useState([]);
  // const [offset, setOffset] = useState(0);

  // getting userid from local storage
  // const userid = localStorage.getItem("user").replace(/"/g, "")
  // const [hasMore, setHasMore] = useState(true);
  const [sidebar, setShowSidebar] = useState(true);
  // handling toggling for sidebar menu in smaller devices
  const sideBarHandle = useCallback(() => {
    setShowSidebar(!sidebar);
  }, [sidebar]);

  
  
  const fetchPosts = useCallback(async () => {
    try {
      const data = await fetchPostData();
      setArticleData(data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const getTopPost = useCallback(async() =>{
    try {
      const data = await getToppost();
      setTopdata(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [])
  const catsData = categories;

  const getTopAuthorsLIst = useCallback(async() =>{
      const data = await getTopAuthors();
      setTopauthor(data)
      // console.log(topauthors)
  },[])

  useEffect(() => {
    fetchPosts();
    getTopPost();
    getTopAuthorsLIst();
  }, [fetchPosts, getTopPost, getTopAuthorsLIst]);

// searching 

  const searcher =  useCallback(async() =>{
    const ans = await getArticleByCat(searchQuery);
    if (ans.length > 0){
      setSearchResult(ans);
    }else{
      setSearchResult(articleData);
    }
  },[searchQuery, articleData])

  useEffect(() => {
    searcher();
  }, [searcher]);

  
  const searchByTitle = useCallback(async() => {
    const ans = await getArticleByTitle(titleQuery);
    if (ans.length > 0){
      setSearchResult(ans);
    }else{
      setSearchResult(articleData);
    }
  }, [titleQuery, articleData])

  useEffect(() => {
    searchByTitle();
  }, [searchByTitle]);
 
  let sortedPosts;

  const handleCatClick = (val) => {
    setSearching(true);
    setSearchQuery(val);
    setShowSidebar(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearching(true);
    setTitleQuery(titleQuery)
  };

  // this is to sort the post according to the api communication state
  if (!searching) {
    sortedPosts = articleData;
  } else if(searching) {
    sortedPosts = searchresult;
  }

  if (!sortedPosts) {
    return <Loading />;
  }

  return (
    <>
      <div id="dashboard">
        <Topbar
          showBottomBoxShadow={true}
          sideBarHandle={sideBarHandle}
          sidebar={sidebar}
        />
        <div className="dashboard_wrapper">
          <div className={!sidebar ? "dashboard_left" : "show_left"}>
            <div className="search_div">
              <input
                className="search"
                type="text"
                name=""
                value={titleQuery}
                onChange={(e) => setTitleQuery(e.target.value)}
                placeholder="Search by article title..."
              />
              <FaSearch className="search_icon" onClick={handleSearch} />
            </div>
            {/* categories */}
            <div id="categories">
              <h1>Categories</h1>
              <ul>
                {catsData &&
                  catsData.map((data) => (
                    <li
                      key={data.id}
                      value={data.type}
                      onClick={() => {
                        handleCatClick(data.type);
                      }}
                      className="link"
                    >
                      {data.type}
                    </li>
                  ))}
              </ul>
            </div>
            {/* toppost */}
            <div id="toppost">
              <h1>Top Posts</h1>
              <ul>
                {topData &&
                  topData.map((data) => (
                    <li key={data.id} className="link">
                      <Articlelist article={data} />
                    </li>
                  ))}
              </ul>
            </div>
            {/* topauthors */}
            <div className="top_authors">
              <h2>Top Authors</h2>
              <div className="authors_contain">
        
                {topauthors &&
                  topauthors.map((data) => (
                    <Link key={data.id} to={`/profile/${data.id}`}>
                      <img
                        src={
                          data.profilePicture
                            ? data.profilePicture
                            : top_author_default_img
                        }
                        alt="top_author_profile"
                      />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <div className={sidebar ? "dashboard_right" : "show_right"}>
            {sortedPosts ? sortedPosts.map((data) => (
              <Articlecard key={data.id} articles={data} />
            )): <h1>Feed Loading Please wait......</h1>}
            ;
          </div>
        </div>
      </div>
    </>
  );
});

export default Dashboard;
