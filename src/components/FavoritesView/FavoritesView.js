import React, { Component } from 'react';
import FavoritesImageList from '../FavoritesImageList/FavoritesImageList.js'


class FavoritesView extends Component {

    render() {
        return (
            <div>
                <h1>Favorites Component</h1>
                <FavoritesImageList />
            </div>
        );
    }

}

export default FavoritesView;
