import "./App.css"
import Message from "./Message"

export default () => {
  return <>
    <main>
      <Message self={true} date="04:20 2020/12/12" user="Dunha"  text="ssadfsafdas" />
      <Message self={false} date="04:20 2020/12/12" user="Dirce"  text="ssadfsafdas" />
    </main>
    <div className="input-area">
      <textarea placeholder="Digite sua mensagem"> </textarea>
      <button type="submit">Enviar</button>
    </div>
  </>
}