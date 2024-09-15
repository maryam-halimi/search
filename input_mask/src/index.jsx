const SpellCheckInput = ({handleChange,suggestedCities,search }) => {
  return (
    <div className="input">
      
      <input
        type="text"
        id="input"
        value={search}
        placeholder="search city"
        onChange={handleChange}
      />
          {suggestedCities.length > 0 && (
        <ul className="suggestions">
          {suggestedCities.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ul>
      )}
      
    </div>
  );
};

export default SpellCheckInput;