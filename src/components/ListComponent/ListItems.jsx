// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';

const Items = (props) => (
    <div className="items-container">
        {
            props.items.map(item => (
                <figure key={item.id}>
                    <img src={item.thumbnailUrl} alt={item.title} />
                    <figcaption>
                        <h3>{item.title}</h3>
                    </figcaption>
                </figure>
            ))
        }
    </div>
)

Items.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        img_url: PropTypes.string.isRequired,
        img_description: PropTypes.string.isRequired
    })).isRequired
};

export default Items;
