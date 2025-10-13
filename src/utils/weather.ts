export interface WeatherInfo {
  city: string;
  temperature: number;
  season: string;
  hemisphere: "north" | "south";
  emoji: string;
}

export class WeatherEstimator {
  private static getHemisphere(timezone: string): "north" | "south" {
    const southernRegions = [
      "America/Argentina",
      "America/Chile",
      "America/Uruguay",
      "America/Paraguay",
      "America/Bolivia",
      "America/Lima",
      "Australia",
      "Antarctica",
      "Africa/Johannesburg",
      "Africa/Cape_Town",
      "Pacific/Auckland",
      "Indian/Mauritius",
    ];

    return southernRegions.some((region) => timezone.includes(region))
      ? "south"
      : "north";
  }

  private static getSeasonInfo(month: number, hemisphere: "north" | "south") {
    const seasons = {
      north: [
        { name: "Invierno", emoji: "❄️", baseTemp: 8 }, // Dic-Feb (0,1,11)
        { name: "Primavera", emoji: "🌸", baseTemp: 18 }, // Mar-May (2,3,4)
        { name: "Verano", emoji: "☀️", baseTemp: 28 }, // Jun-Ago (5,6,7)
        { name: "Otoño", emoji: "🍂", baseTemp: 15 }, // Sep-Nov (8,9,10)
      ],
      south: [
        { name: "Verano", emoji: "☀️", baseTemp: 28 }, // Dic-Feb (0,1,11)
        { name: "Otoño", emoji: "🍂", baseTemp: 15 }, // Mar-May (2,3,4)
        { name: "Invierno", emoji: "❄️", baseTemp: 8 }, // Jun-Ago (5,6,7)
        { name: "Primavera", emoji: "🌸", baseTemp: 18 }, // Sep-Nov (8,9,10)
      ],
    };

    let seasonIndex;
    if (month >= 11 || month <= 1)
      seasonIndex = 0; // Dic-Feb
    else if (month >= 2 && month <= 4)
      seasonIndex = 1; // Mar-May
    else if (month >= 5 && month <= 7)
      seasonIndex = 2; // Jun-Ago
    else seasonIndex = 3; // Sep-Nov

    return seasons[hemisphere][seasonIndex];
  }

  static estimateWeather(options?: { variationRange?: number }): WeatherInfo {
    const { variationRange = 8 } = options || {};

    try {
      // Obtener ubicación y fecha
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const city =
        timezone.split("/").pop()?.replace("_", " ") || "Desconocida";
      const now = new Date();
      const month = now.getMonth();

      // Determinar hemisferio y estación
      const hemisphere = this.getHemisphere(timezone);
      const seasonInfo = this.getSeasonInfo(month, hemisphere);

      // Calcular temperatura con variación
      const variation =
        Math.floor(Math.random() * (variationRange * 2)) - variationRange;
      const temperature = seasonInfo.baseTemp + variation;

      return {
        city,
        temperature,
        season: seasonInfo.name,
        hemisphere,
        emoji: seasonInfo.emoji,
      };
    } catch (error) {
      // Fallback en caso de error
      return {
        city: "Desconocida",
        temperature: 20,
        season: "Desconocida",
        hemisphere: "north",
        emoji: "🌡️",
      };
    }
  }

  static formatWeatherString(weather: WeatherInfo): string {
    return `${weather.emoji} ${weather.city} ${weather.temperature}°C`;
  }

  static getDetailedWeatherString(weather: WeatherInfo): string {
    return `${weather.emoji} ${weather.city} - ${weather.season} ${weather.temperature}°C (${weather.hemisphere === "north" ? "Hemisferio Norte" : "Hemisferio Sur"})`;
  }
}
