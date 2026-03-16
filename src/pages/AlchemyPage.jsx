import React, { useState, useEffect } from 'react';

export default function AlchemyPage() {
  const [plants, setPlants] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [selectedHerbs, setSelectedHerbs] = useState([]);
  const [suggestedRecipes, setSuggestedRecipes] = useState(null);
  const [isBrewing, setIsBrewing] = useState(false);

  const MAX_HERBS = 3;

  // Fetch data
  useEffect(() => {
    Promise.all([
      fetch('/api/plants').then(r => r.json()),
      fetch('/api/recipes').then(r => r.json())
    ]).then(([plantsData, recipesData]) => {
      setPlants(plantsData);
      setRecipes(recipesData);
      setLoading(false);
    }).catch(err => {
      console.error("Error fetching alchemy data", err);
      setLoading(false);
    });
  }, []);

  const toggleHerb = (plantId) => {
    setSuggestedRecipes(null); // Reset results if pot changes
    setIsBrewing(false);

    if (selectedHerbs.includes(plantId)) {
      setSelectedHerbs(selectedHerbs.filter(id => id !== plantId));
    } else {
      if (selectedHerbs.length < MAX_HERBS) {
        setSelectedHerbs([...selectedHerbs, plantId]);
      }
    }
  };

  const removeHerb = (index) => {
    setSuggestedRecipes(null);
    setIsBrewing(false);
    const newHerbs = [...selectedHerbs];
    newHerbs.splice(index, 1);
    setSelectedHerbs(newHerbs);
  };

  const handleBrew = () => {
    if (selectedHerbs.length === 0) return;
    setIsBrewing(true);
    
    // Fake brewing delay for immersion
    setTimeout(() => {
      // Find all recipes that contain ALL of the selected herbs.
      // E.g., if user selects Tulsi, show recipes that have Tulsi in them.
      // If user selects Tulsi and Giloy, show recipes that have BOTH Tulsi and Giloy in them.
      const matches = recipes.filter(r => {
        // Find recipes that contain AT LEAST ONE of the selected herbs
        return selectedHerbs.some(herbId => r.ingredients.includes(herbId));
      });
      
      setSuggestedRecipes(matches);
      setIsBrewing(false);
    }, 1500);
  };

  if (loading) return <div className="alchemy-section" style={{textAlign:'center', paddingTop:'100px'}}>Igniting the fire...</div>;

  return (
    <section className="alchemy-section">
      <div className="container">
        <div className="alchemy-header" style={{ animation: 'fadeInUp 0.8s ease-out both' }}>
          <h1 className="alchemy-title">Ayurvedic Alchemy</h1>
          <p className="section-sub" style={{color: 'var(--text-300)'}}>
            Select ancient herbs, add them to the cauldron, and discover traditional medicinal formulations.
          </p>
        </div>

        <div className="alchemy-grid">
          
          {/* Left Column: Herb Shelf */}
          <div className="herb-shelf" style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>
            <h3 className="shelf-title">Herb Shelf</h3>
            <div className="herb-list">
              {plants.map(plant => {
                const isSelected = selectedHerbs.includes(plant.id);
                return (
                  <div 
                    key={plant.id} 
                    className={`herb-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => toggleHerb(plant.id)}
                    title={plant.name}
                  >
                    <span className="herb-emoji">{plant.emoji}</span>
                    <span className="herb-name">{plant.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center Column: The Cauldron */}
          <div className="cauldron-area" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
            <div className="pot-ingredients">
              {[...Array(MAX_HERBS)].map((_, i) => {
                const herbId = selectedHerbs[i];
                if (herbId) {
                  const herbInfo = plants.find(p => p.id === herbId);
                  return (
                    <div key={i} className="pot-herb" onClick={() => removeHerb(i)} title="Remove">
                      {herbInfo?.emoji}
                    </div>
                  );
                }
                return <div key={i} className="pot-herb empty"></div>;
              })}
            </div>

            <div className="cauldron-container">
              <div className={`glow-effect ${isBrewing ? 'active' : ''}`}></div>
              <div className="cauldron-icon">{isBrewing ? '🔥' : '🏺'}</div>
            </div>

            <button 
              className="brew-btn" 
              onClick={handleBrew} 
              disabled={selectedHerbs.length === 0 || isBrewing}
            >
              {isBrewing ? 'Brewing...' : 'Brew Potion'}
            </button>
          </div>

          {/* Right Column: Results */}
          <div className="recipe-results" style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}>
            <h3 className="shelf-title">Alchemy Results</h3>
            
            {suggestedRecipes === null && !isBrewing && (
              <div className="no-results-msg">
                <span>📖</span>
                <p>Add herbs to the pot and brew to discover formulations.</p>
              </div>
            )}

            {isBrewing && (
              <div className="no-results-msg">
                <span style={{animation: 'spin 2s linear infinite'}}>✨</span>
                <p>Analyzing combination...</p>
              </div>
            )}

            {suggestedRecipes !== null && suggestedRecipes.length === 0 && (
              <div className="no-results-msg">
                <span>💨</span>
                <p>This exact combination doesn't match known classical recipes. Try removing an herb or selecting a different base.</p>
              </div>
            )}

            {suggestedRecipes !== null && suggestedRecipes.length > 0 && (
              <div className="recipe-list">
                {suggestedRecipes.map((recipe, i) => (
                  <div key={recipe.id} className="recipe-card" style={{animationDelay: `${i * 0.15}s`}}>
                    <div className="recipe-header">
                      <div className="recipe-emoji">{recipe.emoji}</div>
                      <div>
                        <div className="recipe-name">{recipe.name}</div>
                        <div className="recipe-type">{recipe.type}</div>
                      </div>
                    </div>
                    <p className="recipe-desc">{recipe.desc}</p>
                    <div className="recipe-ingredients">
                      {recipe.ingredients.map(ingId => {
                        const pInfo = plants.find(p => p.id === ingId);
                        const isUserSelected = selectedHerbs.includes(ingId);
                        return (
                          <span key={ingId} className={`ing-badge ${isUserSelected ? '' : 'missing'}`} title={isUserSelected ? 'You added this' : 'Required ingredient'}>
                            {pInfo ? `${pInfo.emoji} ${pInfo.name}` : ingId}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
