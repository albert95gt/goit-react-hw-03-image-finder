import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { fetchImagesWithSearchValue } from '../../services/PixabayApi';
import Button from '../Button';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Loader from '../Loader';
import Modal from '../Modal';

import { GlobalStyle } from '../GlobalStyle';
import { AppCss } from './App.styled';

class App extends Component {
  state = {
    searchValue: '',
    images: [],
    page: 1,
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchValue, page } = this.state;

    if (prevState.searchValue !== searchValue || prevState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const images = await fetchImagesWithSearchValue(searchValue, page);
        if (images.length <= 0) {
          toast.error('Not result, please input a new search value!');
        }
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

  setLargeImgUrl = largeImageURL => {
    this.setState({ largeImageURL });
    this.handleToggleModal();
  };

  handleToggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, isLoading, error, showModal, largeImageURL } = this.state;

    return (
      <AppCss>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleSubmitForm} />
        <ToastContainer theme="colored" />
        {error && <h1>{error.message}</h1>}

        {images.length > 0 && (
          <ImageGallery images={images} setLargeImgUrl={this.setLargeImgUrl} />
        )}
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onLoadMore={this.handleLoadMore} />
        )}

        {showModal && (
          <Modal onClose={this.handleToggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </AppCss>
    );
  }
}

export default App;
