class Pokemon {
  constructor(image, name, types) {
    this.image = image;
    this.name = name;
    this.types = types;
  }

  toDiv() {
    const card = document.createElement('div');
    card.classList.add('card');

    //Image
    const img = document.createElement('img');
    img.src = this.image;
    card.appendChild(img);

    //Name
    const name = document.createElement('p');
    name.textContent = this.name;
    card.appendChild(name);

    //Types
    const types = this.types.map((type) => {
      const typeSpan = document.createElement('span');
      typeSpan.textContent = type.type.name;
      return typeSpan;
    });
    card.append(...types);

    return card;
  }

  print() {
    console.log(`
       Imagen: ${this.image}
       Nombre: ${this.name}
       Tipos: ${this.types}
    `);
  }
}
