import React from 'react';
import NavigationItems from './NavigationItems';
import NavigationIcon from "../images/navigation.svg";
import StarIcon from "../images/star.svg";
import MessangerIcon from "../images/messanger.svg";
import GraphIcon from "../images/graph.svg";
import EarthIcon from "../images/world.svg";
import BuildingIcon from "../images/building.svg";

const NavigationTab = () => {
  return (
    <div>
        <NavigationItems iconSrc={NavigationIcon} altText="navigation"   />
        <NavigationItems iconSrc={StarIcon} altText="navigation"   />
        <NavigationItems  iconSrc={MessangerIcon} altText="navigation"  />
        <NavigationItems  iconSrc={GraphIcon} altText="navigation" />
        <NavigationItems  iconSrc={EarthIcon} altText="navigation"  />
        <NavigationItems  iconSrc={BuildingIcon} altText="navigation"   />
      
    </div>
  )
}

export default NavigationTab