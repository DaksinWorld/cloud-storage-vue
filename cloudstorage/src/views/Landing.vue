<template>
  <div class="wrapper">
    <nav>
      <div class="logo"></div>
      <div class="text">
        <h3>About</h3>
        <h3>Pricing</h3>
        <h3>Contact</h3>
        <button>
          <router-link to="/login">
            Get Started
          </router-link>
        </button>
      </div>
    </nav>
    <main>
      <h1>
        Manage <span>all your files</span><br>
        in <span>one place</span>
      </h1>
      <h2>
        A comfortable way to have access to <br>
        all your files
      </h2>
      <form @submit.prevent>
        <input type="text" placeholder="Enter your email...">
        <button type="submit">
          <router-link to="/login">
            Get Started
          </router-link>
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import {onBeforeMount} from 'vue'

export default {
  setup() {
    onBeforeMount(() => {
      document.body.className = 'background'
    })
  },
  components: {}
}
</script>

<style lang="scss" scoped>

button:hover {
  background: #3dd08a;
  transition: background-color .2s ease-in-out;
}

button{
  a {
    text-decoration: none;
    color: white;
  }
}

nav {
  padding-top: 40px;
  display: grid;
  grid-template-columns: 50% 50%;

  .logo {
    background: url("../image/Logo.svg");
    width: 287px;
    height: 91px;
    cursor: pointer;
    transition: background .2s linear;
  }

  .logo:hover {
    background: url("../image/LogoHover.png");
    transition: background .2s linear;
  }

  .text {
    display: flex;
    flex-direction: row;
    align-items: center;

    h3 {
      font-size: 30px;
      font-weight: 700;
      font-family: Raleway;
      margin-right: 80px;
      transition: color .2s linear;
    }

    h3:hover {
      transition: color .2s linear;
      color: #42C787;
    }

    button {
      outline: none;
      background: #42C787;
      border: 0px;
      width: 220px;
      font-family: Raleway;
      font-weight: 700;
      color: white;
      font-size: 30px;
      height: 75px;
      border-radius: 10px;
      transition: background-color .2s ease-in-out;
    }

    button:hover {
      background: #3dd08a;
      transition: background-color .2s ease-in-out;
    }
  }
}

main {
  padding-top: 100px;

  h1 {
    font-size: 68px;

    span {
      color: #42C787;
    }
  }

  h2 {
    font-weight: 500;
    font-size: 26px;
    color: var(--black);
  }

  form {
    margin-top: 120px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 475px;
    height: 85px;
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
      border: none;
      font-size: 26px;
      font-family: Raleway;
      font-weight: 400;
      outline: none;
      margin-left: 20px;
    }

    button {
      outline: none;
      background: #42C787;
      border: 0px;
      font-family: Raleway;
      font-weight: 700;
      color: white;
      font-size: 25px;
      padding: 20px 10px;
      border-radius: 10px;
      transition: background-color .2s ease-in-out;
    }
  }
}
</style>