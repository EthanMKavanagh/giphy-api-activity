import React, { Component } from 'react';
import FavoritesImage from '../FavoritesImage/FavoritesImage.js'


class FavoritesImageList extends Component {

    render() {
        return (
            <div>
                <h3>Favorites - Image List</h3>
                <FavoritesImage />
                <FavoritesImage />
            </div>
        );
    }

}

export default FavoritesImageList;
