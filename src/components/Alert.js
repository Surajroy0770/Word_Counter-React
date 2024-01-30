import React from 'react'
const Capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{Capitalize(props.alert.type)}!</strong> {props.alert.msg}.
    </div>
  )
}
export default Alert
