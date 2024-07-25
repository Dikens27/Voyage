// import SearchForm from '../components/searchForm/SearchForm';
import CatalogList from '../components/catalogList/CatalogList';
import { useDispatch } from 'react-redux';
// import Loader from '../components/loader/Loader';
// import { selectLoading, selectError } from '../redux/campers/selectors';
import { useEffect } from 'react';
import { fetchCampers } from '../redux/campers/operations';
// import LoadMoreBtn from '../components/loadMoreBtn/LoadMoreBtn';
// import { useSearchParams } from 'react-router-dom';

export default function CatalogPage() {
  const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div>
      {/* <SearchForm onSearch={handleSearch} /> */}
      <CatalogList />
      {/* {showBtn && !loader && <LoadMoreBtn onClick={handleLoadMore} />} */}
      {/* {loader && <Loader />} */}
    </div>
  );
}
