import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import "../../styles/EventItem.css";

import api from '../../api/apiHandler';
import apiHandler from '../../api/apiHandler';

const FavoriteEventItem = (props) => {
    const {name, description, mainImageUrl, _id} = props.event;
    const { deleteFavEvent } = props;
    console.log(props);

    const handlerClick = (e) => {
        e.preventDefault();
        console.log('click fav delete');
        
        deleteFavEvent(_id);
    }

    return (
        <div className="profile-event">
            <div className="profile-event-container">
                <div className="profile-event-visu">
                    <img src={mainImageUrl}
                        className="profile-event-visu-image"
                        width="80px"
                        alt=""/>
                </div>
                <div className="content-event">
                    <h3 className="event-title"> {name}</h3>
                    <p className="event-description"> {description}</p>
                </div>
            </div>
            <div className="actions-btn">
                <Link to={
                        `profile/event/${_id}/details`
                    }
                    className="btn btn-show">
                    <Icon name='eye'/>Show
                </Link>

                <Link to={
                        `profile/event/${_id}/edit`
                    }
                    className="btn btn-edit">
                    <Icon name='pencil'/>Edit
                </Link>

                <button 
                    className="btn btn-delete"
                    onClick={(e) => {handlerClick(e)}}
                >
                    <Icon name='trash alternate'/>Delete
                </button>
            </div>
        </div>
    )
}

export default FavoriteEventItem;
