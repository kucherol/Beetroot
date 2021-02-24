fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const emp = document.querySelector('.emp');
    const items = data
    .map(person =>
        `<li>Name: ${person.name}; Phone number: ${person.phone}; City: ${person.address.city}; Address: street ${person.address.street} suite${person.address.suite}`);

    const listItems = `<ul>${items.toString().split(',').join('')}</ul>`

    emp.insertAdjacentHTML('afterbegin', listItems)
  })
  .catch(error => console.log('error --->', error))