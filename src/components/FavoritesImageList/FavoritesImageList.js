import React, { Component } from 'react';
import FavoritesImage from '../FavoritesImage/FavoritesImage.js'
import { connect } from 'react-redux';


const mapStateToProps = reduxState => ({
    favorites: reduxState.favoritesListReducer
});


class FavoritesImageList extends Component {

    componentDidMount() {
        this.getFavorites();
        this.getCategory();
    }

    // RENDERS FAVORITES LIST TO DOM ON PAGE LOAD
    getFavorites = () => {
        this.props.dispatch({
            type: 'FETCH_FAVORITES'
        })
    }

    // PULLS IN CATEGORY LIST from DB
    getCategory = () => {
        this.props.dispatch({
            type: 'FETCH_CATEGORY'
        })
    }

    render() {
        return (
            <div>
                <h3>Favorites - Image List</h3>
                { this.props.favorites.map(favImage =>
                    <FavoritesImage
                        changeCategory={this.changeCategory}
                    />
                )}
            </div>
        );
    }

}

export default connect(mapStateToProps)(FavoritesImageList);
