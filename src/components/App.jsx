import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import EmptyList from './EmptyList/EmptyList';
import { getImage } from 'service/Api';

export class App extends Component {
  state = {
    query: '',
    imageList: [],
    loading: false,
  };

  componentDidUpdate = async (prevProps, prevState, snapshot) => {
    const data = await getImage(this.state.query);

    if (prevState.imageList === this.state.imageList) {
      this.setState({ imageList: data });
      return;
    }
  };

  querryForFind = query => {
    this.setState({ query: query });
  };

  render() {
    return (
      <div
        style={{
          display: 'block',
          alignItems: `center`,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.querryForFind} />
        <>
          {this.state.loading && <Loader />}
          {this.state.imageList.length > 0 ? (
            <ImageGallery imageList={this.state.imageList} />
          ) : (
            <EmptyList />
          )}
        </>
      </div>
    );
  }
}
