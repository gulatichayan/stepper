import React, { useEffect } from 'react';
import Progress from '../progress';

export default function Stepper(props) {
  
  useEffect(() => {
    props.setCurrentPage(props.pageNumber)
  });

  const Content = props.content;
  
  return (
    <div>
      <Progress
        currentPage={props.currentPage}
      />
      <Content />
    </div>
  )
  
};