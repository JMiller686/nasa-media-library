import './NextPrevToggles.scss';

const NextPrevToggles = ({data, handlePageChange}) => {
    let prev, next = '';
    if(data.links) {
        if(data.links.length < 2) {
            next = data.links[0].href.substring(36);
        } else {
            prev = data.links[0].href.substring(36);
            next = data.links[1].href.substring(36);
        }
    }
    

    return (
        <div className="next-prev-toggles">
            {!prev ? <span></span> :
                <span>
                    <button 
                        data-page={prev}
                        data-page-toggle="prev"
                        onClick={handlePageChange}>&#10094;
                    </button>
                    Previous
                </span>
            }
            
            {!next ? <span></span> : 
                <span>
                    Next
                    <button 
                        data-page={next}
                        data-page-toggle="next"
                        onClick={handlePageChange}>&#10095;
                    </button>
                </span>
            }
        </div>
    )
}

export default NextPrevToggles
