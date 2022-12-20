import clases from "./SearchField.scss";

const SearchField = ({ onChangeHandler, className }) => {
  return <input className={className} onChange={onChangeHandler} />;
};
export default SearchField;
