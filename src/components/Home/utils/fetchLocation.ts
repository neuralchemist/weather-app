type Err = {
  message: string;
};

/** get location using HTML5 native Geolocation API */
async function getLocation(): Promise<string> {
  const response = new Promise<string>((resolve, reject) => {
    // not supported by browser
    if (!navigator.geolocation) {
      reject("Geolocation is not supported by the browser");
    }

    // supported by browser
    const onSuccess = (position: GeolocationPosition) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      resolve(`${latitude},${longitude}`);
    };

    const onError = (err: Err) => {
      reject(`Failed to get location`);
    };

    // get location
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  });

  return response;
}

/** fetch location from local storage or Geolocation api */
export async function fetchLocation() {
  // search location data in local storage
  let location: string | null = localStorage.getItem("wapp-location");
  // console.log("fetchLocation -> localStorage -> location ", location);

  if (location) {
    console.log("%clocation from local storage", "color: red");
  } else {
    // get location from Geolocation Api
    console.log("%cFetching location data from api", "color: green");
    location = await getLocation();
    console.log("fetchLocation -> getLocation -> location: ", location);
    // store location in local storage
    localStorage.setItem("wapp-location", location);
  }

  return location;
}
