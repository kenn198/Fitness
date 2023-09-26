<template>
  <div>
    <form @submit.prevent="registerUser">
      <input v-model="form.name" type="text" placeholder="Name" required />
      <input v-model="form.email" type="email" placeholder="Email" required />
      <input v-model.number="form.contact" type="tel" placeholder="Contact" required />
      <button type="submit">Register</button>
    </form>
    <p v-if="registrationStatus">{{ registrationStatus }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const form = ref({
      name: '',
      email: '',
      contact: null,
    });

    const registrationStatus = ref(''); // Reactive variable for registration status

    const registerUser = async () => {
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form.value),
        });

        if (response.ok) {
          registrationStatus.value = 'Registration successful'; // Set success message
        } else {
          registrationStatus.value = 'Registration failed'; // Set error message
        }
      } catch (error) {
        console.error('Error during registration:', error);
        registrationStatus.value = 'Internal server error'; // Set error message
      }
    };

    return {
      form,
      registerUser,
      registrationStatus, // Expose registration status to the template
    };
  },
};
</script>
