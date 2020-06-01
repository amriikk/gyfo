export function getCurrentLatLng() {
    // Wrap getCurrentPosition to return a promise
    return new Promise( (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        pos => resolve({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }),
        err => {
          console.log('Could not geocode')
          reject(err);
        }
      );
    });
  }