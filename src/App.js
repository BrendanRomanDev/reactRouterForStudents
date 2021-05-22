import "./App.css";
import { Component } from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  Toast,
  ToastBody,
  ToastHeader,
} from "reactstrap";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import NavigationBar from "./components/NavBar";
import LogIn from "./components/Login";
import ComponentsPage from "./components/ComponentsPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "Brendan@example.com",
      favoriteAlbums: [
        {
          id: 1,
          albumTitle: "Somewhere Else",
          artist: "Funkmasta Brendan",
        },
        {
          id: 2,
          albumTitle: "Nomu",
          artist: "Good Kid",
        },
        {
          id: 3,
          albumTitle: "Continue",
          artist: "Wax",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <NavigationBar userEmail={this.state.userEmail} />
        <Container className="py-4">
          <Switch>
            <Route
              exact
              path="/home"
              render={() => <UserHomePage albums={this.state.favoriteAlbums} />}
            />
            <Route
              path="/home/:albumId"
              render={({ match }) => (
                <AlbumInfo match={match} albums={this.state.favoriteAlbums} />
              )}
            />
            <Route path="/components" component={ComponentsPage} />
            <Route exact path="/" component={LogIn} />
            <Redirect to="/" />
          </Switch>
        </Container>
      </div>
    );
  }
}

function UserHomePage({ albums }) {
  return (
    <div className="px-2">
      <h1>Welcome, Brendan</h1>
      <h3>Your Albums</h3>
      {albums.map(album => {
        return (
          <Toast className="mb-4 rounded">
            <ToastHeader>{album.albumTitle}</ToastHeader>
            <ToastBody>
              <Link to={`/home/${album.id}`}>Link To Album Info</Link>
            </ToastBody>
          </Toast>
        );
      })}
      <Link to="/">Sign Out</Link>
    </div>
  );
}

function AlbumInfo(props) {
  const album = props.albums.filter(
    album => album.id === +props.match.params.albumId
  )[0];
  console.log(album);

  return (
    <Card>
      <CardHeader>{album.albumTitle}</CardHeader>
      <CardBody>
        <p>{album.artist}</p>
        <p>{album.id}</p>
        <Link to="/home">Go Back</Link>
      </CardBody>
    </Card>
  );
}

export default App;
