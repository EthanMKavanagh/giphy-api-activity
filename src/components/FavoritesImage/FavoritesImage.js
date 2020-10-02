import React, { Component } from 'react';
import './FavoritesImage.css'
import { Button, Menu, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';

//Global Variable 
let category = '';

function FavoritesImage(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (props) => {
        setAnchorEl(null);
    };


    const setCategory = (value) => {
        category = value;
        console.log('category is:', category);
        handleClose();
        // return category;
    }

    console.log('category is:', props.category);

    return (
        <div className="container">
            <div className="image-container">
                <img
                    src={props.url}
                    alt={`default title`}
                    className="image"
                    key={props.id}
                />
            </div>

            <div>
                <Button aria-controls="simple-menu" aria-haspopup="true"
                    onClick={handleClick}
                // onClick={() => props.changeCategory(props.id)}
                >
                    Set Category
                    </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {props.category.map(category =>
                        <MenuItem
                            onClick={() => setCategory()}
                            value={category.id}
                        >{category.name}
                        </MenuItem>
                    )}
                </Menu>
            </div>

            <p>Category: {props.category.name} </p>
        </div >
    );
}
const mapStateToProps = (reduxState) => ({
    url: reduxState.favoritesListReducer.url,
    id: reduxState.favoritesListReducer.id,
    category_id: reduxState.favoritesListReducer.category_id,
    category: reduxState.categoryListReducer
})
export default connect(mapStateToProps)(FavoritesImage);
