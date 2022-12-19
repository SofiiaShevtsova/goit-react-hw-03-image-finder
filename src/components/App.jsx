import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import Section from "./Section/Section";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { getImage } from "service/Api";

export class App extends Component {
  state = {
    query: '',
    imageList: [],
    showModal: false,
  }

  componentDidUpdate = async(prevProps, prevState, snapshot) => {
    const data = await getImage(this.state.query)
    console.log(data);
    if (prevState.imageList === this.state.imageList) {
      this.setState({ imageList: data })
      console.log("no");
      return
    }
  }

  querryForFind = (query) => {
    this.setState({query: query})
  }

  render() {
      return (
    <div
      style={{
        display: 'block',
        alignItems: `center`,
        color: '#010101',
      }}
    >
      <Section>
            <Searchbar onSubmit={this.querryForFind} />
      </Section>
          <Section>
            <> {this.state.imageList.length>0? (<><ImageGallery imageList={ this.state.imageList} /><Button/></>): (<Loader/>)}
      {this.state.showModal&& (<Modal/>)}</>
           
          </Section>
    </div>
  );

  }
}

