const ValidationText = (props) => {
  const showable = () => {
    return (props.status != null && !props.status);
  }
  return(
    <div className={showable() ? 'invalid-feedback show' : 'hide'}>
        {props.msg}
      </div>
    );
}
export default ValidationText;