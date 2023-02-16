// Function to check if a string contains only letters (uppercase and lowercase)
export const containsOnlyLetters = (str) => /^[a-zA-Z]+$/.test(str);

// Function to check if a string is a valid email address
export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Function to check if a string is a valid URL
export const isValidUrl = (url) => /^https?:\/\/\S+$/.test(url);

// Function to check if a string contains only numbers
export const containsOnlyNumbers = (str) => /^\d+$/.test(str);

// Function to check if a string is a valid phone number
export const isValidPhoneNumber = (phoneNumber) => /^\d{10}$/.test(phoneNumber);

// Function to check if a string contains only alphanumeric characters
export const containsOnlyAlphanumeric = (str) => /^[a-zA-Z0-9]+$/.test(str);

// Function to check if a string is a valid username (3-16 characters, letters and numbers only)
export const isValidUsername = (username) =>
  /^[a-zA-Z0-9]{3,16}$/.test(username);

// Function to check if a string is a valid password (8-20 characters, at least one uppercase letter, one lowercase letter, and one number)
export const isValidPassword = (password) =>
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(password);

// Function to check if a string is a valid credit card number (Visa, MasterCard, American Express, and Discover)
export const isValidCreditCardNumber = (creditCardNumber) =>
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9][0-9])[0-9]{12})$/.test(
    creditCardNumber
  );

// Function to check if a string is a valid date in the format YYYY-MM-DD
export const isValidDate = (date) => /^\d{4}-\d{2}-\d{2}$/.test(date);

// Function to check if a string is a valid time in the format HH:MM:SS
export const isValidTime = (time) => /^\d{2}:\d{2}:\d{2}$/.test(time);

// Function to check if a string is a valid US zip code (5 digits)
export const isValidZipCode = (zipCode) => /^\d{5}$/.test(zipCode);

// Function to check if a string is a valid US state abbreviation (2 uppercase letters)
export const isValidStateAbbreviation = (stateAbbreviation) =>
  /^[A-Z]{2}$/.test(stateAbbreviation);

// Function to check if a string is a valid IPv4 address
export const isValidIPv4Address = (ipv4Address) =>
  /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    ipv4Address
  );

// Function to check if a string is a valid IPv6 address
export const isValidIPv6Address = (ipv6Address) =>
  /^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$/i.test(ipv6Address);

// Function to check if a string is a valid MAC address
export const isValidMacAddress = (macAddress) =>
  /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(macAddress);

// Function to check if a string is a valid hexadecimal color code (e.g. #FFFFFF or #000000)
export const isValidHexColorCode = (hexColorCode) =>
  /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hexColorCode);

// Function to check if a string is a valid RGB color code (e.g. rgb(255,255,255))
export const isValidRgbColorCode = (rgbColorCode) =>
  /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/.test(rgbColorCode);

// Function to check if a string is a valid CSS color code (e.g. red, #FFFFFF, rgb(255,255,255))
export const isValidCssColorCode = (cssColorCode) =>
  /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$|^transparent|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow$/i.test(
    cssColorCode
  );

// Function to check if a string is a valid slug (lowercase letters, numbers, and hyphens only)
export const isValidSlug = (slug) => /^[a-z0-9-]+$/.test(slug);

// Function to check if a string is a valid UUID (version 4)
export const isValidUuid = (uuid) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    uuid
  );
