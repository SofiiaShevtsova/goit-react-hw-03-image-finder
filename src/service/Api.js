// import throttle from "lodash.throttle";
import { Notify } from 'notiflix';
import axios from 'axios';


export const getImage = async query => {
  let nameImages = `q=${query}`;
  let page = 1;
  const options =
    'key=31187211-d453cf6c0705ee9af6400cbd4&min_height=1200&image_type=photo&orientation=horizontal&safesearch=true&per_page=4';
  const baseUrl = 'https://pixabay.com/api/';

  try {
    const response = await axios.get(`${baseUrl}?${options}&page=${page}&${nameImages}`);
    if (response.data.hits.length === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.',
        { width: '500px', distance: '50px', fontSize: '24px' }
      );
      return;
    }

    Notify.info(`Hooray! We found ${response.data.totalHits} images.`, {
      width: '500px',
      distance: '50px',
      fontSize: '24px',
    });
    //    let totalPages = Math.ceil(response.data.totalHits / 20);
    return response.data.hits;
  } catch (error) {
    Notify.failure(`${error}`, {
      width: '500px',
      distance: '50px',
      fontSize: '24px',
    });
  }
};

// async function loadMore() {
//       page += 1;
//     if (totalPages < page) {
//       Notify.failure(
//         "We're sorry, but you've reached the end of search results.",
//         { width: "500px", distance: "50px", fontSize: "24px" }
//       );
//       return;
//     }
//   try {
//     const response = await axios.get(
//       `${baseUrl}?${options}` + `page=${page}&${nameImages}`
//     );
//   } catch (error) {
//     Notify.failure(error, {
//       width: "500px",
//       distance: "50px",
//       fontSize: "24px",
//     });
//   }
// }

// function onGalleryScroll(event) {
//   const { height: cardHeight } =
//     boxGallery.firstElementChild.getBoundingClientRect();
//   window.scrollBy({
//     top: cardHeight * 2,
//     behavior: "smooth",
//   });

//   btnPause.classList.add("active");
//   btnToStart.classList.add("active");
// }

// async function infinityScroll() {
//   const { height: cardHeight } =
//     boxGallery.firstElementChild.getBoundingClientRect();

//   if (
//     document.querySelector("body").getBoundingClientRect().bottom <
//     cardHeight * 5
//   ) {
//     loadMore();
//   }
// }

// function onPauseClick(event) {
//   window.scrollBy({
//     top: 0,
//   });
//   // window.removeEventListener("scroll", onGalleryScroll);
//   window.addEventListener("scroll", onGalleryScroll);
// }

// function toStart() {
//   window.scrollTo({
//     top: document.querySelector("body").getBoundingClientRect().top,
//   });
//   window.removeEventListener("scroll", onGalleryScroll);
// }
