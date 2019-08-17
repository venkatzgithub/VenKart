import React from 'react';
import "./menu-item.styles.scss";
import { withRouter } from 'react-router-dom';
const Menuitem = ({ title, size, imageUrl, history, match, linkurl,props }) =>{
console.log(props);
return(
    (<div className={`${size} menu-item`} onClick={() => history.push(` ${match.url}${linkurl}`)}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1><h1>{size}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
    ))}
export default withRouter(Menuitem);