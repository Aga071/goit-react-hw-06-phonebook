import { useDispatch } from 'react-redux';
import { getFilterName } from 'redux/reducer/filterSplice';

export default function FilterName() {
  const dispatch = useDispatch();

  const handlerChangeFilter = event => {
    return dispatch(getFilterName(event.target.value));
  };
  return (
    <div>
      <p>Find contacts by name</p>

      <input onChange={handlerChangeFilter} type="text" name="filter" />
    </div>
  );
}
