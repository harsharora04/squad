import { ClientApi } from "./client"

export const getDataByType = ({ url, params }) => {
  return ClientApi.get(url, {params})
}

export const fetchJobs = ({params}) => {
    return ClientApi.get("jobs", {params})
}

export const fetchAnnouncements = () => {
  return ClientApi.get("announcements")
}

export const fetchCommunities = () => {
  return ClientApi.get("resources")
}