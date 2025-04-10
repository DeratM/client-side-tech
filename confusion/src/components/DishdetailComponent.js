import React, { useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent'; // Import Loading

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    } else {
        return <div>No Dish Available</div>;
    }
}

function RenderComments({ comments }) {
    if (comments && comments.length > 0) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author}, {new Date(comment.date).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else {
        return <div>No comments yet.</div>;
    }
}

const DishDetail = (props) => {
    // UseEffect is optional here; if you need to fetch comments or dishes on mount
    useEffect(() => {
        // You can use useEffect to dispatch actions if needed
    }, []);

    if (props.isLoading) {  // Check if loading
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {  // Check if there's an error
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish == null) {
        return <div>No dish available</div>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <RenderComments comments={props.comments} />  
            </div>
        </div>
    );
}

export default DishDetail;
