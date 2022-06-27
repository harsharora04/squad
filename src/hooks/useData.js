import { useCallback, useEffect, useState } from "react";
import { getDataByType } from "../services/home";

const useData = (link) => {
  const [offset, setOffset] = useState(1);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [hasEnd, setHasEnd] = useState(false);

  const getData = useCallback(async () => {
    if (fetching) return;
    setFetching(true);
    const params = {
      page: offset,
      limit: 10
    };

    const response = await getDataByType({url: link, params});
    setFetching(false);
    if (response.data && Array.isArray(response.data)) {
      if (!response.data.length) {
        setHasEnd(true);
      }
      setData([...data, ...response.data]);
      setOffset(offset + 1);
    } else {
      setError(true);
    }
  }, [fetching, offset, data, link]);


  useEffect(() => {
    getData();
  }, []);

  return { data, fetching, error, onLoadMore: getData, hasEnd };
}

export default useData;