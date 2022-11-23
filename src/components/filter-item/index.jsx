import "../filter-list/index.css";

const FilterItem = ({ onChange, itemValue, filter }) => {
  return (
    <li className="filter-item">
      <input type="checkbox" onChange={onChange} checked={itemValue} />
      <div className="filter-item-title">{filter}</div>
    </li>
  );
};

export default FilterItem;
