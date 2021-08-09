import './QueryResultInfo.scss';

const QueryResultInfo = ({currentSearch,data}) => {
    return (
        <div className="query-results-info">
            <p className="current-search">Showing results for "{currentSearch}":</p>
            <p>Displaying page 1 of {Math.ceil(data.metadata.total_hits / 100)}</p>
        </div>
    )
}

export default QueryResultInfo
