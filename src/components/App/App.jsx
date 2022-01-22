import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { fetchImagesWithSearchValue } from '../../services/PixabayApi';
import Button from '../Button';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Loader from '../Loader';
import Modal from '../Modal';

class App extends Component {
  state = {
    searchValue: '',
    images: [],
    page: 1,
    isLoading: false,
    error: null,
    showModal: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchValue, page } = this.state;

    if (prevState.searchValue !== searchValue || prevState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const images = await fetchImagesWithSearchValue(searchValue, page);

        this.setState(prevState => ({
          images: [...prevState.images, ...images],
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmitForm = searchValue => {
    this.setState({ searchValue });
    this.resetPage();
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: (prevState.page += 1),
    }));
  };

  resetPage = () => {
    this.setState({
      page: 1,
      images: [],
    });
  };

  handleToggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, isLoading, error, showModal } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmitForm} />
        <ToastContainer autoClose={3000} theme="colored" />
        {error && <h1>{error.message}</h1>}

        {images.length > 0 && (
          <>
            <ImageGallery images={images} openModal={this.handleToggleModal} />
            <Button onLoadMore={this.handleLoadMore} />
          </>
        )}
        {isLoading && <Loader />}
        {showModal && (
          <Modal>
            <img src={images[0].largeImageURL} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
