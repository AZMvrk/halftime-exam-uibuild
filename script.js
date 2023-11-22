document.querySelector("#root").insertAdjacentHTML("beforeend", `
    <form>
      <h1>Visszajelzés</h1>

      <input type="text" placeholder="Tárgy">

      <textarea placeholder="Megjegyzés"></textarea>

      <div>
        <input type="checkbox">
        <p>Elolvastam és elfogadom az Adatkezelési Tájékoztatót.</p>
      </div>
      
      <div>
        <input type="checkbox">
        <p>Szeretnék hírlevelet kapni.</p>
      </div>

      <button>Mentés</button>

    </form>
`)