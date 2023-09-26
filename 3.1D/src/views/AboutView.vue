<template>
  <div>
    <h1>The nearest gym branch is located by<img id="marker" :src="markerImage" alt="Marker"></h1>
    <div id="google-map" style="width: 100%; height: 400px;"></div>
    <button @click="getLocation" style="display: block; margin: 0 auto; margin-top: 1rem; padding: 1rem 2rem; font-size: 1.2rem; background-color:cyan">Get Current Location</button>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const map = ref(null);
const markerImage = ref('https://maps.google.com/mapfiles/ms/icons/red-dot.png');
// Initialize the map
onMounted(() => {
  map.value = new google.maps.Map(document.getElementById('google-map'), {
    center: { lat: -37.81061343198866, lng: 144.95689124318238 }, // Default center
    zoom: 12,
  });

  // Automatically get the user's location when the map loads
  getLocation();

  // Added custom gym markers at Melbourne Central
  addGymMarker({ lat: -37.81581489670707, lng: 144.95526481745497 }, 'Gym A');
  addGymMarker({ lat: -37.809847348979744, lng: 144.95114978004716 }, 'Gym B');
  // Add more gym markers as needed
});

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const userLocation = new google.maps.LatLng(latitude, longitude);

        // Update the map's center to the user's location
        map.value.setCenter(userLocation);

        // You can also add a marker at the user's location if needed
        new google.maps.Marker({
          position: userLocation,
          map: map.value,
          title: 'Your Location',
        });
      },
      (error) => {
        // Handle any errors, such as permission denied
        console.error('Error getting location:', error);
      }
    );
  } else {
    console.error('Geolocation is not supported in this browser.');
  }
};

const addGymMarker = (position, title) => {
  new google.maps.Marker({
    position,
    map: map.value,
    title,
    icon: {
      url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
      scaledSize: new google.maps.Size(40, 40), // Adjust the size if needed
    },
  });
};
</script>
