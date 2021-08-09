import Loading from '../../components/Loading/Loading';
import MasonryGrid from '../../components/MasonryGrid/MasonryGrid';
import NextPrevToggles from '../../components/NextPrevToggles/NextPrevToggles';
import './HomePage.scss';

const HomePage = ({loading, data, initialLoad, handlePageChange}) => {
    return (
        <div>
            {loading ? <Loading /> : <MasonryGrid images={data}/>}
            {!initialLoad ? <NextPrevToggles data={data} handlePageChange={handlePageChange} /> : null}
        </div>
    )
}

export default HomePage;
