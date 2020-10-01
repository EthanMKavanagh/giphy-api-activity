import React, { Component } from 'react';
import './FavoritesImage.css'
import { Button, Menu, MenuItem } from '@material-ui/core';

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

    return (
        <div className="container">
            <div className="image-container">
                <img
                    src={'https://media.giphy.com/media/2GqhGZEwKI9ZRW3BjL/giphy.gif'}
                    alt={`test title`}
                    className="image"
                />
            </div>

            <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Set Category
                    </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem
                        onClick={() => setCategory()}
                        value={'Funny'}
                    >Funny
                    </MenuItem>

                    <MenuItem
                        onClick={() => setCategory('Cohort')}
                    >Cohort</MenuItem>

                    <MenuItem
                        onClick={() => setCategory('Cartoon')}
                    >Cartoon</MenuItem>

                    <MenuItem
                        onClick={() => setCategory('NSFW')}
                    >NSFW</MenuItem>

                    <MenuItem
                        onClick={() => setCategory('Meme')}
                    >Meme</MenuItem>
                </Menu>
            </div>

            <p>Category: {category} </p>
        </div>
    );
}
export default FavoritesImage;
