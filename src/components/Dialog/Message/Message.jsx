import React from 'react';
import s from '../Dialogs.module.css';

const Message = (props) => {
  return (
      <div className={s.messages + ' ' + s[props.st]}><div className={s.name}>{props.name}:</div>{props.message}
  </div>
  )
}

export default Message;