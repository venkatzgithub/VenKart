import React from 'react';
import Shopdata from './shop.data';
import Collection from '../../components/collection/collection.component';
class Shop extends React.Component{
constructor(props){
super(props);
this.state={
    collections:Shopdata
}

}

render()

{
    const { collections } = this.state;
    return (<div className="Shop-page">
        {
           collections.map(({id,...otherCollectionProps})=>
           <Collection key={id}{...otherCollectionProps}></Collection>)
        }
    </div>)
}


}
export default Shop;