// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';

const Items = ({ items }) => (
    <div>
        {
            items.map(item => (
                <figure key={item.id}>
                    <img src={item.img_url} alt={item.img_description} />
                </figure>
            ))
        }
    </div>
);

Items.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        img_url: PropTypes.string.isRequired,
        img_description: PropTypes.string.isRequired
    })).isRequired
};

export default Items;
