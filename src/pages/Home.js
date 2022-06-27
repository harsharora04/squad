import BoxSlider from "../components/Slider";
import { SLIDER_TYPES } from "../components/Slider/Slider";
import useData from "../hooks/useData";

const Home = () => {
  const { 
    data: jobsData, 
    fetching: jobsFetching, 
    error: jobsError, 
    onLoadMore: jobsLoadMore ,
    hasEnd: jobsEnd
  } = useData("jobs");

  const { 
    data: announcementsData, 
    fetching: announcementsFetching, 
    error: announcementsError, 
    onLoadMore:  announcementsLoadMore,
    hasEnd: announcementsEnd
  } = useData("announcements");

  const { 
    data: communitiesData, 
    fetching: communitiesFetching, 
    error: communitiesError, 
    onLoadMore:  communitiesLoadMore,
    hasEnd: communitiesEnd
  } = useData("resources");

  return (<div>
    { 
      jobsData && 
      <BoxSlider title="Recommended jobs for you" 
        onLoadMore={jobsLoadMore}
        loading={jobsFetching && !jobsData.length}
        type={SLIDER_TYPES.JOB} 
        error={jobsError}
        hasEnd={jobsEnd}
        items={jobsData} /> 
    }
    { 
      announcementsData && 
      <BoxSlider title="Announcements" 
        onLoadMore={announcementsLoadMore}
        loading={announcementsFetching && !announcementsData.length}
        type={SLIDER_TYPES.ANNOUNCEMENT} 
        hasEnd={announcementsEnd}
        error={announcementsError}
        items={announcementsData} /> 
    }
    { 
      communitiesData && 
      <BoxSlider title="Community" 
        onLoadMore={communitiesLoadMore}
        loading={communitiesFetching && !communitiesData.length}
        type={SLIDER_TYPES.COMMUNITY} 
        hasEnd={communitiesEnd}
        error={communitiesError}
        items={communitiesData} /> 
    }
  </div>)
}

export default Home;