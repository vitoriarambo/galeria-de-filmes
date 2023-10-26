const filme = [
{
   id: 1,
   nome: "Filme 1",
   imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXc1LbBINFyR4gyJ6a8eJjAA-5c2bp-Dxmg&usqp=CAU",
   dataPassado: "12/05/2022",
   dataLancamento: "05/05/2022",
   emLancamento: true,
   precoTicket: 20,
   quantidadeTickets: 100,
},
{
   id: 2,
   nome: "Filme 2",
   imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8tcAJqW7shQrit7nibwmCuy7gSM3WGuAtw&usqp=CAU",
   dataPassado: "25/04/2022",
   dataLancamento: "15/04/2022",
   emLancamento: false,
   precoTicket: 25,
   quantidadeTickets: 50,
},
{
   id: 3,
   nome: "Filme 3",
   imagem: "https://lh4.googleusercontent.com/xbryw1wWK0SAxsKaNRX7QnMcaTWTZg9s24y_g-XtpPtOTNE6I5MWN_6rLrBgokcPYawGYMR8QMGurel-E4k5sn2qnjiV7Ru9ulQuBowuC3aUhbc0Y8FOzrnQGZRA-94wYr44ja1XH6M2306IDg",
   dataPassado: "25/04/2022",
   dataLancamento: "15/04/2022",
   emLancamento: false,
   precoTicket: 25,
   quantidadeTickets: 50,
},
{
   id: 4,
   nome: "Filme 4",
   imagem: "https://topdezfilmes.de/wp-content/uploads/2023/10/sound_of_freedom.jpg",
   dataPassado: "25/04/2022",
   dataLancamento: "15/04/2022",
   emLancamento: false,
   precoTicket: 25,
   quantidadeTickets: 50,
},
{
   id: 5,
   nome: "Filme 5",
   imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFGeok37N4E6-evDydtH1G9vCJi8smYvRCw&usqp=CAU",
   dataPassado: "25/04/2022",
   dataLancamento: "15/04/2022",
   emLancamento: false,
   precoTicket: 25,
   quantidadeTickets: 50,
},
{
   id: 6,
   nome: "Filme 6",
   imagem: "https://cinema10.com.br/upload/filmes/filmes_12149_0636548.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg?default=poster",
   dataPassado: "25/04/2022",
   dataLancamento: "15/04/2022",
   emLancamento: false,
   precoTicket: 25,
   quantidadeTickets: 50,
},
{
   id: 7,
   nome: "Filme 7",
   imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XfqciIgZ02aF4PLsBdIHbgMyasnO_X0J_A&usqp=CAU",
   dataPassado: "25/04/2022",
   dataLancamento: "15/04/2022",
   emLancamento: false,
   precoTicket: 25,
   quantidadeTickets: 50,
},
{
   id: 8,
   nome: "Filme 8",
   imagem: "https://criticasdefilmes1.files.wordpress.com/2021/09/tomejerryofilme.jpg?w=390&h=574",
   dataPassado: "25/04/2022",
   dataLancamento: "15/04/2022",
   emLancamento: false,
   precoTicket: 25,
   quantidadeTickets: 50,
},
{
   id: 9,
   nome: "Filme 9",
   imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVVMDjagaPd6DBgkkE7DMk49xP1q4CphiQSQ&usqp=CAU",
   dataPassado: "25/04/2022",
   dataLancamento: "15/04/2022",
   emLancamento: false,
   precoTicket: 25,
   quantidadeTickets: 50,
},
{
   id: 10,
   nome: "Filme 10",
   imagem: "https://cinema10.com.br/upload/filmes/filmes_11330_54fas5das.jpg",
   dataPassado: "25/04/2022",
   dataLancamento: "15/04/2022",
   emLancamento: false,
   precoTicket: 25,
   quantidadeTickets: 50,
},
];
filme.forEach((filme) => {
const divFilme = document.createElement("div");
divFilme.className = "filme";
divFilme.innerHTML = `
   <h2>${filme.nome}</h2>
   <img src="${filme.imagem}" alt="${filme.nome}">
   <p>Data Passado: ${filme.dataPassado}</p>
   <p>Data Lançamento: ${filme.dataLancamento}</p>
   <p>Em Lançamento: ${filme.emLancamento ? "Sim" : "Não"}</p>
   <p>Preço do Ticket: ${filme.precoTicket}</p>
   <p>Quantidade de Tickets: ${filme.quantidadeTickets}</p>
`;
document.body.appendChild(divFilme);
});

