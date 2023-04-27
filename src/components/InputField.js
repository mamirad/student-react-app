const InputField = (props) => {
    return(
      <input type={props.type} onChange={props.method} className={props.classes} id={props.ids} value={props.value} placeholder={props.placeHolder} />
      );
};
export default InputField