import React from 'react';
import './collection.styles.scss';
import Collectionitem from '../collection-item/collection-item.component';
const Collection = ({ title,items }) => (
    <div className="collection-preview">
        <h1>{title}</h1>
        <div className="preview">
            {
                items.filter((item,id)=>id<4).map(({id,...itemProps}) => 
            <Collectionitem key={id} {...itemProps}></Collectionitem>


                )
            }
        </div>
    </div>
);
export default Collection;