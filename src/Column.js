import React from 'react';
export function Column(props) {
  return <div style={{flexGrow: props.flexGrow}}>{props.children}</div>;
}
