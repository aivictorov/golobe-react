import ListingFilterDualRange from './ListingFilterDualRange';
import ListingFilterRadioButtons from './ListingFilterRadioButtons';

const ListingFiltersHotels = ({ filterParams, changeFilter, resetTrigger }) => {

    return (
        <>
            <ListingFilterDualRange
                name='price'
                title='Price'
                min={filterParams.price.min}
                max={filterParams.price.max}
                format='price'
                changeFilter={changeFilter}
                resetTrigger={resetTrigger}
            />
            <ListingFilterRadioButtons
                name='rating'
                title='Rating'
                min={filterParams.rating.min}
                max={filterParams.rating.max}
                changeFilter={changeFilter}
                resetTrigger={resetTrigger}
            />
        </>
    );
}

export default ListingFiltersHotels;