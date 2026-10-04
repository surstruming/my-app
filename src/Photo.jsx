import React, { Component } from "react";
import axios from "axios";
import "./Photos.css"
axios.defaults.baseURL = "https://pixabay.com/api/?key=55051466-b7604a3be699597ee22dc0f29&";

const PhotoList = ({ photos }) => (
 <div>
   {photos.map(({ id, webformatURL, tags }) => (
     
       <img className="img" key={id} src={webformatURL} alt={tags} />
     
   ))}
 </div>
);

class Photo extends Component {
 state = {
   photos: [],
   search: "",
 };
handleChange = (e) => {
   this.setState({ search: e.target.value });
 }
 handleSubmit = async (e) => {
   e.preventDefault();
   const response = await axios.get("", {
     params: {key: "55051466-b7604a3be699597ee22dc0f29", q: this.state.search, image_type: "photo" },
   });
   this.setState({ photos: response.data.hits });
 }


 render() {
   const { photos,search } = this.state;
   return (
     <div className="divInp">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
          className="inp"
            type="text"
            value={search}
            onChange={this.handleChange}
            placeholder="Search for photos..."
          />
          <button className="btn" type="submit">
            Знайти
          </button>
        </form>
        <PhotoList className="photos" photos={photos}/>
     </div>
   );
 }
}
export default Photo