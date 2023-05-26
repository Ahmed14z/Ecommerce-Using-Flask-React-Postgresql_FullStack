export default class APIService {
  static UpdatePerson(id, name, age, gender, email) {
    return fetch(`http://localhost:8000/persons/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // content type
        // your request url
      },
      body: JSON.stringify({
        name: name,
        age: age,
        email: email,
        gender: gender,
      }),
    }).then((resp) => resp.json());
  }

  static addPerson(name, age, gender, email) {
    return fetch(`http://localhost:8000/persons`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // content type
        // your request url
      },
      body: JSON.stringify({
        name: name,
        age: age,
        email: email,
        gender: gender,
      }),
    }).then((resp) => resp.json());
  }
  static getUser(id) {
    return fetch(`http://localhost:8000/user/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  }

  static deletePerson(id) {
    return fetch(`http://localhost:8000/persons/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json", // content type
        // your request url
      },

      // age: ,
      // email: JSON.stringify({ email }),
      // gender: JSON.stringify({ gender }),
      // name: JSON.stringify({ name }),
    });
  }
}
