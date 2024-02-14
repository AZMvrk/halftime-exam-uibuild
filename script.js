document.querySelector("#root").insertAdjacentHTML("beforeend", `
    <form>
      <h1>Visszajelzés</h1>

      <input type="text" placeholder="Tárgy">

      <textarea placeholder="Megjegyzés"></textarea>

      <div class="checkboxAndP">
        <input type="checkbox" id="agree" hidden>
        <label for="agree">Elolvastam és elfogadom az <span class="underline">Adatkezelési Tájékoztatót</span>.</label>
      </div>
      
      <div class="checkboxAndP">
        <input type="checkbox" id="newsletter" hidden>
        <label for="newsletter">Szeretnék hírlevelet kapni.</label>
      </div>

      <button type="button">Mentés</button>

    </form>
`)