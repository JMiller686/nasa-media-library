import Loading from '../../components/Loading/Loading';
import MasonryGrid from '../../components/MasonryGrid/MasonryGrid';
import './HomePage.scss';

const HomePage = ({images, loading}) => {

    return (
        <div>
            {loading ? <Loading /> : <MasonryGrid images={images}/>}
        </div>
    )
}

export default HomePage;
