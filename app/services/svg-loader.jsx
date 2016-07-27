import React from 'react' 

export const SvgLoader = ({svg, uid}) => 
    <div id={uid} dangerouslySetInnerHTML={{__html:svg}} />
