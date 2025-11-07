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
          <p>Select what Computer Vision Techniques should be done on the image:</p>

          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="techniques" value="classification" />
              Image Classification
            </label>
            <label>
              <input type="checkbox" name="techniques" value="object-detection" />
              Object Detection
            </label>
            <label>
              <input type="checkbox" name="techniques" value="segmentation" />
              Image Segmentation
            </label>
            <label>
              <input type="checkbox" name="techniques" value="feature-extraction" />
              Feature Extraction
            </label>
          </div>

          <label>Upload Image: </label>
          <input type='file' name='img' accept='image/*' />
          <div className='actions'>
            <button
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Calibri, 'Helvetica Neue', Arial",
              }}
              type="submit"
              className="primary">
              Submit
            </button>
          </div>
          </div>
        </form>
        </div>
      </div>
    </>
  );
}

export default App;
