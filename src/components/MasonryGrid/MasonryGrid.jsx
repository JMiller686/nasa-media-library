import Masonry from 'react-masonry-css';
import './MasonryGrid.scss';

const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
      };

    

const MasonryGrid = ({images}) => {
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {images.items.map((image, index) => {
                if(image.links !== undefined) {
                    return(
                        <div key={index}>
                            <img 
                                src={image.links[0].href} 
                                alt={image.data[0].description} 
                                className='masonry-img'/>
                        </div>
                    )
                }
            })}
        </Masonry>
    )
}

export default MasonryGrid
