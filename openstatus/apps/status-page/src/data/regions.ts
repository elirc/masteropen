export const regions = [
  {
    code: "ams",
    location: "Amsterdam, Netherlands",
    flag: "🇳🇱",
    continent: "Europe",
  },
  {
    code: "arn",
    location: "Stockholm, Sweden",
    flag: "🇸🇪",
    continent: "Europe",
  },
  {
    code: "atl",
    location: "Atlanta, Georgia, USA",
    flag: "🇺🇸",
    continent: "North America",
  },
  {
    code: "bog",
    location: "Bogotá, Colombia",
    flag: "🇨🇴",
    continent: "South America",
  },
  {
    code: "bom",
    location: "Mumbai, India",
    flag: "🇮🇳",
    continent: "Asia",
  },
  {
    code: "bos",
    location: "Boston, Massachusetts, USA",
    flag: "🇺🇸",
    continent: "North America",
  },
  {
    code: "cdg",
    location: "Paris, France",
    flag: "🇫🇷",
    continent: "Europe",
  },
  {
    code: "den",
    location: "Denver, Colorado, USA",
    flag: "🇺🇸",
    continent: "North America",
  },
  {
    code: "dfw",
    location: "Dallas, Texas, USA",
    flag: "🇺🇸",
    continent: "North America",
  },
  {
    code: "ewr",
    location: "Secaucus, New Jersey, USA",
    flag: "🇺🇸",
    continent: "North America",
  },
  {
    code: "eze",
    location: "Ezeiza, Argentina",
    flag: "🇦🇷",
    continent: "South America",
  },
  {
    code: "fra",
    location: "Frankfurt, Germany",
    flag: "🇩🇪",
    continent: "Europe",
  },
  {
    code: "gdl",
    location: "Guadalajara, Mexico",
    flag: "🇲🇽",
    continent: "North America",
  },
  {
    code: "gig",
    location: "Rio de Janeiro, Brazil",
    flag: "🇧🇷",
    continent: "South America",
  },
  {
    code: "gru",
    location: "Sao Paulo, Brazil",
    flag: "🇧🇷",
    continent: "South America",
  },
  {
    code: "hkg",
    location: "Hong Kong, Hong Kong",
    flag: "🇭🇰",
    continent: "Asia",
  },
  {
    code: "iad",
    location: "Ashburn, Virginia, USA",
    flag: "🇺🇸",
    continent: "North America",
  },
  {
    code: "jnb",
    location: "Johannesburg, South Africa",
    flag: "🇿🇦",
    continent: "Africa",
  },
  {
    code: "lax",
    location: "Los Angeles, California, USA",
    flag: "🇺🇸",
    continent: "North America",
  },
  {
    code: "lhr",
    location: "London, United Kingdom",
    flag: "🇬🇧",
    continent: "Europe",
  },
  {
    code: "mad",
    location: "Madrid, Spain",
    flag: "🇪🇸",
    continent: "Europe",
  },
  {
    code: "mia",
    location: "Miami, Florida, USA",
    flag: "🇺🇸",
    continent: "North America",
  },
  {
    code: "nrt",
    location: "Tokyo, Japan",
    flag: "🇯🇵",
    continent: "Asia",
  },
  {
    code: "ord",
    location: "Chicago, Illinois, USA",
    flag: "🇺🇸",
    continent: "North America",
  },
  {
    code: "otp",
    location: "Bucharest, Romania",
    flag: "🇷🇴",
    continent: "Europe",
  },
  {
    code: "phx",
    location: "Phoenix, Arizona, USA",
    flag: "🇺🇸",
    continent: "North America",
  },
  {
    code: "qro",
    location: "Querétaro, Mexico",
    flag: "🇲🇽",
    continent: "North America",
  },
  {
    code: "scl",
    location: "Santiago, Chile",
    flag: "🇨🇱",
    continent: "South America",
  },
  {
    code: "sjc",
    location: "San Jose, California, USA",
    flag: "🇺🇸",
    continent: "North America",
  },
  {
    code: "sea",
    location: "Seattle, Washington, USA",
    flag: "🇺🇸",
    continent: "North America",
  },
  {
    code: "sin",
    location: "Singapore, Singapore",
    flag: "🇸🇬",
    continent: "Asia",
  },
  {
    code: "syd",
    location: "Sydney, Australia",
    flag: "🇦🇺",
    continent: "Oceania",
  },
  {
    code: "waw",
    location: "Warsaw, Poland",
    flag: "🇵🇱",
    continent: "Europe",
  },
  {
    code: "yul",
    location: "Montreal, Canada",
    flag: "🇨🇦",
    continent: "North America",
  },
  {
    code: "yyz",
    location: "Toronto, Canada",
    flag: "🇨🇦",
    continent: "North America",
  },
] as const;

export type Region = (typeof regions)[number]["code"];

export const groupedRegions = regions.reduce(
  (acc, region) => {
    const continent = region.continent;
    if (!acc[continent]) {
      acc[continent] = [];
    }
    acc[continent].push(region.code);
    return acc;
  },
  {} as Record<string, Region[]>,
);
