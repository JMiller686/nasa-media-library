import Container from 'react-bootstrap/Container';
import Masonry from 'react-masonry-css';
import './HomePage.scss';

const HomePage = ({images, loading}) => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
      };

    return (
        <Container>
            <h1>Home Page</h1>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {loading ? loading : images.items.map((image, index) => {
                    if(index < 20) {
                        if(image.links !== undefined) {
                            return(<div><img src={image.links[0].href} className='masonry-img'/></div>)
                        }
                        
                    }
                })}
            </Masonry>
            <div>
                
            </div>
        </Container>
    )
}

export default HomePage;
