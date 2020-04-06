import React, { useEffect, useState } from "react";
import { useAuth0 } from "../../contexts/auth0-context";
import axios from "axios";
import "./BrowseProductList.scss";

const BrowseProductList = () => {
  const { statusUrl } = useAuth0();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // if (window.location.href === "/browse") {
    axios
      .get(`${statusUrl}api/browse/all`)
      .then(response => setListings([...response.data]))
      .catch(err => console.log(err));
    // }
  }, []);

  return (
    <div className="browsePMother">
      <div className="browsePMain">
        <h2 className="browsePHead">Recent Listings</h2>
        <div className="browsePListings">
          {listings.map(list => (
            <div key={list.listing_uid} className="listItem">
              <img className="itemImage" src={statusUrl + list.image} alt="" />
              <div className="itemTextParent">
                <h3 className="itemTitle">{list.title}</h3>
                <p className="itemCategory">{list.category}</p>  
              </div>
              <p className="itemPrice">${list.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseProductList;