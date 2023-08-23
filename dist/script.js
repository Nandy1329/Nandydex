let pokemonRepository = (function () {
  let e = [];
  function t(e) {
    return fetch(e.detailsUrl)
      .then(function (e) {
        return e.json();
      })
      .then(function (t) {
        (e.previewImageUrl = t.sprites.front_default),
          (e.imageUrl = t.sprites.other["official-artwork"].front_default),
          (e.imageUrlBack = t.sprites.other["official-artwork"].front_shiny),
          (e.height = t.height);
        let n = [];
        t.types.forEach(function (e) {
          n.push(e.type.name);
        }),
          (e.types = n);
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  function n(t) {
    "object" == typeof t && "name" in t && "detailsUrl" in t
      ? e.push(t)
      : console.log("wrong input");
  }
  function i() {
    return e;
  }
  function o(e) {
    t(e).then(function () {
      showModal(e);
    });
  }
  let a;
  return {
    add: n,
    getAll: i,
    loadList: function e() {
      return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
        .then(function (e) {
          return e.json();
        })
        .then(function (e) {
          e.results.forEach(function (e, t) {
            n({ detailsUrl: e.url, name: e.name, id: t + 1 });
          });
        })
        .catch(function (e) {
          console.error(e);
        });
    },
    loadDetails: t,
    addListItem: function e(t) {
      let n = document.querySelector(".list-group"),
        i = document.createElement("li");
      i.classList.add("list-group-item"),
        (a = document.createElement("button")).classList.add(
          "btn",
          "btn-primary"
        ),
        a.setAttribute("data-toggle", "modal"),
        a.setAttribute("data-target", "#pokemonModal");
      let l = document.createElement("img");
      l.classList.add("img-preview"),
        (l.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${t.id}.png`),
        a.addEventListener("click", function () {
          o(t);
        }),
        (a.innerText = t.name),
        a.appendChild(l),
        i.appendChild(a),
        n.appendChild(i);
    },
    showDetails: o,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (e) {
    pokemonRepository.addListItem(e);
  });
});
const modalBody = document.querySelector(".modal-body"),
  modalTitle = document.querySelector(".modal-title");
function showModal(e) {
  (modalBody.innerHTML = ""), (modalTitle.innerHTML = "");
  let t = document.createElement("div");
  t.innerText = e.name;
  let n = document.createElement("div");
  n.classList.add("modal-items", "card");
  let i = document.createElement("img");
  i.classList.add("modal-img", "card-side"), (i.src = e.imageUrl);
  let o = document.createElement("img");
  o.classList.add("modal-img", "card-side", "card-side--back"),
    (o.src = e.imageUrlBack);
  let a = document.createElement("p");
  a.classList.add("modal-items"),
    (a.innerText = `height: ${e.height / 10} ft.`);
  let l = document.createElement("p");
  l.classList.add("modal-items"),
    (l.innerText = `type: ${e.types}`),
    modalTitle.appendChild(t),
    modalBody.appendChild(a),
    modalBody.appendChild(l),
    n.appendChild(i),
    n.appendChild(o),
    modalBody.appendChild(n);
}
