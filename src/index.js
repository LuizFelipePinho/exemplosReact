import React from 'react'; // importando a biblioteca react
import ReactDOM from 'react-dom'; // n sei pra q serve
// import './index.css'; importando o maldito css 
//import App from './App'; // ele ta puxando os dados do nosso app.js e renderizanado na tela   

/*
// tanto a function quanto o reactDOM estavam no documento padrao
function App() {
  return (
    <h1>Olá fudido</h1>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

------------------------------------------------------------
*/             


/*         

Incorporando Expressões em JSX ------------------------------------

                    EXEMPLO 1


const name = 'Luiz Felipe';
const element = <h1>Hello, {name}</h1> // aqui usamos o template pra chamar a variavel nome que é uma string, que por usa vez passa a fazer parte de um elemento JSX armazenado na variavel element

ReactDOM.render( 
  element, // passamos o elemento criado como parametro pra função do react que renderiza na tela
  document.getElementById('root') // pega o id lá do index.html(ele pega essa index pq ele reconhece a pasta public )
);
 -----------------------------------------------------------------------------------------

*/





// //                 EXEMPLO 2  

// // essa função recebe como parametro um objeto contendo primiroNome e segundoNome, e retorna eles separadamente
// function formatarNome(usuario){

//   return usuario.primeiroNome + ' ' + usuario.segundoNome;

// }

// // criamos nosso objeto e armazenamos em usuario 
// const usuario = {
//   primeiroNome: 'Luiz',
//   segundoNome: 'Pinho'
// };


// // esse é o momento em que juntamos as duas funções criadas anteriormente e armazenamos em um elemento 
// const elemento = (
//   <h1>
//     Hello, { formatarNome(usuario) }! {/* pra comentar precisa abrir o placeholder. nessa função abrimos o placeholder pra chamar a funcao formatarNome passando como parametro a const usuario */}
//   </h1>

// );



// // renderizamos esse elemento na tela 
// ReactDOM.render(
//   elemento,
//   document.getElementById('root')
// );






// //                EXEMPLO 2 COM IF 

// essa função recebe como parametro um objeto contendo primiroNome e segundoNome, e retorna eles separadamente
// function formatarNome(usuario){

//   return usuario.primeiroNome + ' ' + usuario.segundoNome;

// }

// // criamos nosso objeto e armazenamos em usuario 
// const usuario = {
//   primeiroNome: 'Luiz',
//   segundoNome: 'Pinho'
// };


// // (nesse outro exemplo é o momento em que juntamos as duas funções criadas anteriormente e armazenamos em um elemento ) essa função verifica se há algo dentro de usuario, se tiver ele vai chamar a função formatarNome  
// function mostrarSaudacao(usuario){
//   if(usuario) {
//     return <h1>Hello, { formatarNome(usuario) }! </h1>
//   } else {
//     return <h1>Hello, Estranho. </h1>
//   }
// }




// // nesse mundo a class vira className
// const elemento = (
//   <div className="mensagemUsuario"> 
//     { mostrarSaudacao(usuario) }
//   </div>

// );




// // renderizamos esse elemento na tela 
// ReactDOM.render(
//   elemento,
//   document.getElementById('root')
// );

// -----------------------------------------------------------------------------------


//                      RENDERIZANDO ELEMETOS
//    EXEMPLO 4

// const elemento = <h1>Hello, world </h1>

// // // renderizamos esse elemento na tela 

// ReactDOM.render(
//   elemento,
//   document.getElementById('root')
// );

//--------------------------------------------------------------------------------------


//                     ATUALIZANDO O ELEMENTO RENDERIZADO

//  EXEMPLO 5
// quando um elemento é criado ele é imutavel, a unica forma de alterar é criar um novo elemento 




// const elemento = <h1>Hello, world </h1>

// ReactDOM.render(
//   elemento,
//   document.getElementById('root')
// );


// function tick() {
//   const elemento = (

//     <div>

//       <h4>Hello, world!</h4>
//       <h2>São { new Date().toLocaleString() }. </h2>
    
//     </div>
//   );
  
  
//   ReactDOM.render(
//     elemento,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);



//                  COMPONENTES E PROPS

// COMPONENTES DE FUNÇÃO E CLASSE

// Funciona quase como uma função a grande sacada é que definimos seu atributo dentro do elemento. lembre sempre de colocar em letra maicusula a primeira letra

// function BemVindo(props) { 

//   return <h1>Hello, { props.name }</h1>

// }
// // primeiro coloca o nome da funcao e logo em seguida a chave e o valor
// const elemento = <BemVindo name="Luiz" />


// // nessa função vc poderia mostrar varios nomes diferentes
// function App(){
//   return (
//     <div>
//       <BemVindo name = "Felipe" />
//       <BemVindo name = "Pinho" />
//       <BemVindo name = "Silva" />

//     </div>

//   );
// }


// //  pra passar como parametro uma função use <NomeFuncao />. e parece que só aceita um parametro para renderizar
// ReactDOM.render(
// //  elemento, 
//   <App />,
//   document.getElementById('root')
// );
// -------------------------------------------------------------------------------------------------------------

//                    EXTRAINDO COMPONENTES





function Comente(props) {
  return (
    <div className="Comente">
      <div className="UsuarioInfo">
        <img className="Avatar" src={ props.autor.avatarUrl } alt={ props.autor.nome } />
        <div className="UsuarioInfo-nome"> { props.autor.nome } </div>
      </div>
      <div className="Comente-texto"> { props.texto } </div>
      <div className="Comentando-data"> { props.data } </div>
    </div>


  );

}