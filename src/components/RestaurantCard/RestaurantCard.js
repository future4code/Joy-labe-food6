import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from "react-router-dom"
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core'
import { goToRestaurant } from '../../route/coordinator';

const useStyles = makeStyles({
    container: {
        width: 328,
        marginTop: 8,
    },
    image: {
        height: 120,
    },
    bottomContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    }
});

const RestaurantCard = (props) => {
    const classes = useStyles()
    const history = useHistory()

    return (
        <Card className={classes.container}>
            <CardActionArea onClick={() => goToRestaurant(history, props.id)}>
                <CardMedia
                    className={classes.image}
                    image={props.logoUrl}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="body1"
                    >
                        {props.name}
                    </Typography>
                    <div className={classes.bottomContainer}>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                        >
                            {props.deliveryTime} min
                        </Typography>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                        >
                            Frete R${props.shipping},00
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default RestaurantCard;