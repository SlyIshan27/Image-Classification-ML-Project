import './App.css';

function App() {
  return (
    <>
      <div class="stars"></div>
      <div class="shooting-star"></div>
      <div class="shooting-star"></div>
      <div class="shooting-star"></div>
      <div class="shooting-star"></div>
      <div class="shooting-star"></div>
      <div className="App"> 
        <div className="App-header">
        <h4>Welcome to the Detectify App. An ML image classification model!</h4>
        <p>Upload your image, for image classification!</p>
        
        <form>
          <div className='container'>
          <label>Image Title: </label>
          <input type='text' placeholder='Enter a title for the image' />
          <label>Upload Image: </label>
          <input type='file' name='img' accept='image/*' />
          </div>
        </form>
        </div>
      </div>
    </>
  );
}

export default App;
