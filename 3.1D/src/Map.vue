<template>
    <div id="google-map" style="width: 100%; height: 400px;"></div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  const initMap = () => {
    // Create a new Google Maps instance
    const map = new google.maps.Map(document.getElementById('google-map'), {
      center: { lat: 37.7749, lng: -122.4194 }, // Set initial map center
      zoom: 12, // Set initial zoom level
    });
  
    // You can add markers, polygons, or other map features here as needed.
  };
  
  onMounted(initMap);
  </script>
  