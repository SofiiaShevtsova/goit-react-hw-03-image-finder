import { Component } from 'react';
import { Notify } from 'notiflix';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import EmptyList from './EmptyList/EmptyList';
import Button from './Button/Button';
import { getImage } from 'service/Api';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    imageList: [],
    loading: false,
  };

  componentDidUpdate = async (prevProps, prevState, snapshot) => {
    if (!this.state.loading && !prevState.loading) {
      this.setState({ loading: true });
    }
    try {
      const data = await getImage(this.state.query, this.state.page);
      if (
        prevState.imageList === this.state.imageList &&
        prevState.query === this.state.query
      ) {
        this.setState({ imageList: [...prevState.imageList, ...data] });
      }
      if (
        prevState.imageList === this.state.imageList &&
        prevState.query !== this.state.query
      ) {
        this.setState({ imageList: data });
      }
    } catch (error) {
      Notify.failure(
        `Sorry, there are no images matching your search query. Please try again.`,
        {
          width: '500px',
          distance: '50px',
          fontSize: '24px',
        }
      );
    } finally {
      if (this.state.loading) {
        this.setState({ loading: false });
      }
    }
  };

  querryForFind = query => {
    this.setState({ query: query, page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
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
          <Loader loading={this.state.loading} />
          {this.state.imageList && this.state.imageList.length > 0 ? (
            <>
              <ImageGallery imageList={this.state.imageList} />
              <Button onClick={this.loadMore} />
            </>
          ) : (
            <EmptyList />
          )}
        </>
      </div>
    );
  }
}
