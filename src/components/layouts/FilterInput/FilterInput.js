import './FilterInput.css';

const FilterInput = ({placeholder}) => {
    return(
        <input placeholder={placeholder} className='filter-input' type={'number'} />
    )
}

export default FilterInput;