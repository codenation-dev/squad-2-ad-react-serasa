
const Service = {
  user(user) {
    fetch(`https://api.github.com/users/${user}`)
      .then(response => response.data);
  }
}

export default Service;