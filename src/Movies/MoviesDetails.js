import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'

function MoviesDetails(props) {
    console.log(props)
    const Found = props.moviedata.find(el => el.id == props.match.params.id)
    return (
        <div classname='moviesdetails' style={{ backgroundColor: 'black', display: 'flex' }} >
            <div style={{ width: '37%', backgroundColor: 'transparent', textAlign: 'center', marginTop: '30px', margin: 'auto' }}>
                {props.login ? <><img style={{ width: '-webkit-fill-available' }} src={Found.posterUrl} />
                    <h4 style={{ color: '#f1ffdf69' }} > {Found.description} </h4>
                    <h5 > <a href={Found.trailer} > Watch Trailer</a></h5>
                    <Button onClick={() => props.history.goBack()} > Go Back to Movies </Button>
                    <Button onClick={() => props.history.push('/')}> Go to Home Page</Button>    </> : <Redirect to='/'></Redirect>}
            </div>
        </div >
    )

}

export default MoviesDetails
