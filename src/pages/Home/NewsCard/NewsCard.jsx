import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;

    return (
        <Card className="mb-4">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex gap-2'>
                    <Image style={{ height: '50px', width: '50px' }} src={author?.img} roundedCircle />
                    <div>
                        <h5 className='mb-0'>{author?.name}</h5>
                        <p>{moment(author?.published_date).format('YYYY-MM-DD')}</p>
                    </div>
                </div>
                <div className='d-flex gap-2'>
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='img-fluid' src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>
                        {details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link>
                    </>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div className='d-flex gap-2'>
                <Rating style={{ maxWidth: 100 }} value={Math.round(rating.number || 0)} readOnly />
                    <span>{rating.number}</span>
                </div>
                <div>
                    <FaEye /> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;