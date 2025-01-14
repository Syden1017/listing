import React from "react";
import ListItem, { Item } from "./ListItem/ListItem";

type listingProps = {
  items: Item[];
};

const Listing: React.FC<listingProps> = ({ items }) => {
  return (
    <ul className="item-list">
      {items.map((item: Item) => (
        <ListItem key={item.listing_id} item={item} />
      ))}
    </ul>
  );
};

export default Listing;
