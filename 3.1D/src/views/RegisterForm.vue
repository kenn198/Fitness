<template>
  <h1>For more information about Courses we provide, Please fill in your details below and we will get back to you</h1>
  <div class="container">
    
    <form @submit.prevent="registerUser" class="form">
      <input v-model="form.name" type="text" placeholder="Name" required />
      <input v-model="form.email" type="email" placeholder="Email" required />
      <input v-model.number="form.contact" type="tel" placeholder="Contact" required />
      <button type="submit">Register</button>
    </form>
    <p class="status" v-if="registrationStatus">{{ registrationStatus }}</p>
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
    
    const registrationStatus = ref('');

    const registerUser = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form.value),
        });

        if (response.ok) {
          registrationStatus.value = 'Registration successful';
        } else {
          registrationStatus.value = 'Registration failed';
        }
      } catch (error) {
        console.error('Error during registration:', error);
        registrationStatus.value = 'Internal server error';
      }
    };

    return {
      form,
      registerUser,
      registrationStatus,
    };
  },
};
</script>

<style scoped>
.container {
  display: top;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 20rem;
  margin: 0 auto; /* This centers the container horizontally */
}

.form, .status {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Add any additional styles you want for your form elements */
input, button {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #007BFF;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
