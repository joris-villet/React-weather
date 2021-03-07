import './index.css';

export default function WeatherForm({cityName, getCity}) {

    return(
        <div>
            <form>
                <label>
                    <input
                        className="cityName"
                        value={cityName} 
                        type="text" 
                        placeholder="Chercher une ville" 
                        onChange={getCity} 
                    />
                </label>
            </form>
        </div>
    )
}