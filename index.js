// Adicione suas fotos e mensagens aqui
const content = document.getElementById('content');

const cardsData = [
    { image: 'public/photo15.jpg', message: 'Primeiro Oi 💘' },
    { image: 'public/photo16.jpg', message: 'Primeiro Date' },
    { image: 'public/photo1.jpg', message: 'O Pedido de Namoro (ou quase 😂)' },
    { image: 'public/photo17.jpg', message: '18 Dias Já com o Amor da Minha Vida' },
    { image: 'public/photo13.jpg', message: 'NIVER DE 1 MEEESS 💐' },
    { image: 'public/photo12.jpg', message: '32º Dia, Primeiro evento de jovens juntos' },
    { image: 'public/photo19.jpg', message: '46º Dia, Primeiro Role em Ribeirão com o Momô' },
    { image: 'public/photo11.jpg', message: '51º Dia, Formatura do meu Nenem' },
    { image: 'public/photo18.jpg', message: 'PRIMEIRO NATAL JUNTOOS 🎄' },
    { image: 'public/photo10.jpg', message: '60º Dia, Primeiro Role na "Praia" com meu Amoi' },
    { image: 'public/photo9.jpg', message: '61º Dia, Primeiro Natal na Vovóó' },
    { image: 'public/photo20.jpg', message: '64º Dia, Primeiro Milky Moo' },
    { image: 'public/photo8.jpg', message: '67º Dia, Primeira noite que "Mimos Juntos" 😂💗' },
    { image: 'public/photo6.jpg', message: 'PRIMEIRO ANO NOVO JUNTOOS 🎊' },
    { image: 'public/photo7.jpg', message: '68º Dia, Primeiro beijo de 2024' },
    { image: 'public/photo21.jpg', message: '77º Dia, Visitando o primeiro lugar que nos encontramos' },
    { image: 'public/photo5.jpg', message: '91º Dia, Vespera de 3 Meses de Namoroo' },
    { image: 'public/photo4.jpg', message: 'Primeira declaração de amor 😂' },
    { image: 'public/photo2.jpg', message: 'NIVER DE 3 MEEESS 💞' },
    { image: 'public/photo3.jpg', message: '92º Dia, Com a fatura do cartão nas alturas 😂' },
    { image: 'public/photo22.jpg', message: '100º DIA COM MEU NENEEM!!' },
    { image: 'public/photo23.jpg', message: '106º Dia, Cuidando do Totó 🐶' },
    { image: 'public/photo24.jpg', message: '107º Dia, Dando o Beijo do jeito que amamos' },
    { image: 'public/photo25.jpg', message: '110º Dia, Experimentando roupas com meu mozão' },
    { image: 'public/photo26.jpg', message: 'FELIZZ 4 MESES MEU DOCINHO DE COCUU HIHI TE AMUU ❤️❤️❤️❤️' },
];

cardsData.forEach(data => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = data.image;
    card.appendChild(image);

    const paragraph = document.createElement('p');
    paragraph.textContent = data.message;
    card.appendChild(paragraph);

    content.appendChild(card);
});
