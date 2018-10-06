import React, { Component } from 'react';
import BigLogo from "../assets/img/logobig.png"
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
  Badge,
  Container,
  Row,
  Col,
  Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle
} from 'reactstrap'
import { FaStar } from 'react-icons/fa';

class MovieBrowser extends Component {

  state = {
    status: false,
    id : '',
    judul: '',
    rating: '',
    img: '',
    movies: [],
    genre: '',
    genrenum: '',

  } 

  componentDidMount(){
      axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=f5f360711bd7e556e473f6c1962c0fc6&region=ID') 
      .then((ambilData) => { 
          console.log(ambilData.data.results);
          this.setState({ 
              movies: ambilData.data.results,
          })  
      }) 
  };

  render() {

    const movies = this.state.movies.map((item, index) =>{
      var id = item.id;
      var title = item.title;
      var rating = item.vote_average;
      var img = item.poster_path;
      var genre = item.genre_ids[0]

      var price =0;
      if(rating >= 0 && rating <=3){
        price = 3500
      }else if (rating > 3 && rating <= 6){
        price =8250
      }else if (rating > 6 && rating <= 8){
        price =16350
      }else if (rating > 8 && rating <= 10){
        price=21250
      }
      
      var ratingmov = rating;
        if (rating == 0){
          ratingmov = 'Not Rated'
        } else {
          ratingmov = rating
        }

      var genrenum = genre;
        if (genre == 28){
          genrenum = 'Action'
        }else if (genre == 12){
          genrenum = 'Adventure'
        }else if (genre == 16){
          genrenum = 'Animation'
        }else if (genre == 35){
          genrenum = 'Comedy'
        }else if (genre == 80){
          genrenum = 'Crime'
        }else if (genre == 99){
          genrenum = 'Documentary'
        }else if (genre == 10751){
          genrenum = 'Family'
        }else if (genre == 14){
          genrenum = 'Fantasy'
        }else if (genre == 36){
          genrenum = 'History'
        }else if (genre == 27){
          genrenum = 'Horror'
        }else if (genre == 10402){
          genrenum = 'Music'
        }else if (genre == 9648){
          genrenum = 'Mistery'
        }else if (genre == 10749){
          genrenum = 'Romance'
        }else if (genre == 878){
          genrenum = 'Science Fiction'
        }else if (genre == 10770){
          genrenum = 'TV Movie'
        }else if (genre == 53){
          genrenum = 'Thriller'
        }else if (genre == 10752){
          genrenum = 'War'
        }else if (genre == 37){
          genrenum = 'Wester'
        }else if (genre == 18){
          genrenum = 'Drama'
        }
      

      return <Col md={15}>
        <Card style={{ backgroundColor: '#0a0b10', border: 0, marginTop: 30 }}>
        <Badge className="moviebadge" color="warning"><FaStar/> {ratingmov}</Badge>
          <Link to={{ pathname: '/moviedetail', state: {movieid: id}}}>
            <CardImg top width="100%" src={'https://image.tmdb.org/t/p/w500' + img} alt="Card image cap" />
          </Link>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <Row>
              <Col><CardText>{genrenum}</CardText></Col>
              <Col><CardSubtitle>Rp. {price}</CardSubtitle></Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    })

    return (
      <div className="App bg">
        {/* <Header/> */}
        <Container>
          <Row>
            <Col style={{marginTop: 180}}>
              <p>{this.state.balance}</p>
            </Col>
            <Col md={12}>
              <img src={BigLogo} style={{width: 300}} />
              <h3 style={{fontSize: 12, marginTop:20}}>Watch movies or stream through your smart TV, PC, MAC, mobile, tablet and more.</h3>
            </Col>
          </Row>
          </Container>
          <Container
          className="nowplaying"
          >
            <p>Now Playing</p>
          </Container>
          <Container>
          <Row>
            {movies}
          </Row>
        </Container>
      </div>
    );
  }
}

export default MovieBrowser;