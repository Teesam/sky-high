import './filter.css';
import DropDown from '../../layouts/DropDown/DropDown';
import FilterInput from '../../layouts/FilterInput/FilterInput';

const Filter = () => {
    return(
        <div className='filter'>
            <div className='filter-dates-holder'>
                <FilterInput placeholder={'dd'} />
                <FilterInput placeholder={'mm'} />
                <FilterInput placeholder={'yr'} />
            </div>
            <p>Filter:</p>
            <DropDown />
        </div>
    )
}

export default Filter;