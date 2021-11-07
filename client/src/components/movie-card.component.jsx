import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getMovieByName, removeMovie } from "../service/movies-service";
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        width: 30,
    },
    media: {
        height: 140,
    },
});
export default function MovieCard(props) {
    const classes = useStyles();
    const { _id, image, movieName, rating, synopsis, date } = props.movieItem;
    function deleteMovie() {
        if (window.confirm('Are you sure you want to REMOVE this movie?')) {
            removeMovie(_id)
                .then((res) => {
                    alert(res.message);
                    window.location.reload(false)
                })
        }
    }
    function movieDetails() {
        getMovieByName(movieName)
            .then((res) => {
                window.location.replace()
            })
    }
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {movieName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {rating}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    <Link to={`/movie-detalis/${_id}`}>Learn More</Link>
                </Button>
                <Button size="small" color="primary">
                    <Link to={`/edit-movie/${_id}`}>Edit</Link>
                </Button>
                <Button onClick={deleteMovie} size="small" color="secondary">
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}