// Imports
import HeaderPicture from '/img/image-omelette.jpeg';

function App() {
  return (
    <div className="App">
      
      <div className="App__content">

        <div className="App__content__header">
          <img src={HeaderPicture} 
            alt="Simple Omelette Recipe" 
            title='Simple Omelette Recipe' 
            className="App__content__header__picture"
          />
          <h1 className='App__content__header__title'>Simple Omelette Recipe</h1>
          <p className='App__content__header__paragraph'>
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>
        </div>

        <div className="App__content__main">

          <div className="App__content__main__preparation">
            <h3 className="App__content__main__preparation__title">Preparation time</h3>
            <ul className="App__content__main__preparation__list">
              <li className="App__content__main__preparation__list__item">
                <span>Total:</span> Approximately 10 minutes
              </li>
              <li className="App__content__main__preparation__list__item">
                <span>Preparation:</span> 5 minutes
              </li>
              <li className="App__content__main__preparation__list__item">
                <span>Cooking:</span> 5 minutes
              </li>
            </ul>
          </div>

          <div className="App__content__main__ingredients">
            <h3 className="App__content__main__ingredients__title">Ingredients</h3>
            <ul className="App__content__main__ingredients__list">
              <li className="App__content__main__ingredients__list__item">
                2-3 large eggs
              </li>
              <li className="App__content__main__ingredients__list__item">
                Salt, to taste
              </li>
              <li className="App__content__main__ingredients__list__item">
                Pepper, to taste
              </li>
              <li className="App__content__main__ingredients__list__item">
                1 tablespoon of butter or oil
              </li>
              <li className="App__content__main__ingredients__list__item">
                Optional filings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>

          <div className="App__content__main__instructions">
            <h3 className="App__content__main__instructions__title">Instructions</h3>
            <ol className="App__content__main__instructions__list">
              <li className="App__content__main__instructions__list__item">
                <strong>Beat the eggs: </strong>
                In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
              </li>
              <li className="App__content__main__instructions__list__item">
                <strong>Heat the pan: </strong>
                Place a non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li className="App__content__main__instructions__list__item">
                <strong>Cook the omelette: </strong>
                Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
              </li>
              <li className="App__content__main__instructions__list__item">
                <strong>Add fillings (optional): </strong>
                When the eggs begin to set at the edges, but are still slightly runny in the middle, sprinkle yout chosen fillings over one half ot the omelette.
              </li>
              <li className="App__content__main__instructions__list__item">
                <strong>Fold and serve: </strong>
                As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another one minute, then slide it onto a plate.
              </li>
              <li className="App__content__main__instructions__list__item">
                <strong>Enjoy: </strong>
                Serve hot, with additional salt and pepper if needed.
              </li>
            </ol>
          </div>

          <div className="App__content__main__nutrition">
            <h3 className='App__content__main__nutrition__title'>Nutrition</h3>
            <p className='App__content__main__nutrition__description'>The table below shows nutritional values per serving without the additional fillings.</p>
            <div className='App__content__main__nutrition__infos'>

              <div className="App__content__main__nutrition__infos__calories">
                <p>Calories</p>
                <span>277kcal</span>
              </div>
              
              <div className="App__content__main__nutrition__infos__carbs">
                <p>Carbs</p>
                <span>0g</span>
              </div>

              <div className="App__content__main__nutrition__infos__proteins">
                <p>Protein</p>
                <span>20g</span>
              </div>

              <div className="App__content__main__nutrition__infos__fat">
                <p>Fat</p>
                <span>22g</span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App
