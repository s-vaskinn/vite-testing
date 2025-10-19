const SortSelector = ({ sortBy, onSortChange }) => {
    return ( 
        <div className="controls">
            <label htmlFor="sort"> Sort By: </label>
            <select id="sort" value={sortBy} onChange={ (e) => onSortChange(e.target.value) }>
                <option value="market_cap_desc">Market Cap (High to Low)</option>
                <option value="market_cap_asc">Market Cap (Low to High)</option>
                <option value="price_desc">Price (High to Low)</option>
                <option value="price_asc">Price (Low to High)</option>
                <option value="change_desc"> Change (High To Low)</option>
                <option value="change_asc"> Change (Low To High)</option>
                <option value="volume_desc">Volume (High to Low)</option>
                <option value="volume_asc">Volume (Low to High)</option>
                
            </select>
        </div>
    );
};

export default SortSelector;