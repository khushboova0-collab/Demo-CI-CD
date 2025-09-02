import { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { config } from '../config';

const GOOGLE_MAPS_API_KEY = config.googleMaps.apiKey;

export const useGoogleMaps = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY,
      version: 'weekly',
      libraries: ['places'],
    });

    loader
      .load()
      .then(() => {
        setIsLoaded(true);
      })
      .catch((error) => {
        setLoadError(error);
        console.error('Google Maps API loading error:', error);
      });
  }, []);

  const initializeAutocomplete = (inputRef, onPlaceSelect) => {
    if (!isLoaded || !inputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ['(cities)'],
      componentRestrictions: { country: 'IN' },
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const city = place.formatted_address || place.name;
        onPlaceSelect(city);
      }
    });

    return autocomplete;
  };

  const initializeAddressAutocomplete = (inputRef, onPlaceSelect) => {
    if (!isLoaded || !inputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ['address'],
      componentRestrictions: { country: 'IN' },
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const address = place.formatted_address;
        onPlaceSelect(address);
      }
    });

    return autocomplete;
  };

  return {
    isLoaded,
    loadError,
    initializeAutocomplete,
    initializeAddressAutocomplete,
  };
};