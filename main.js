// Function for returning data on the book

// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

const BASE_URL = `${
  import.meta.env.VITE_API_URL
}/volumes?q=search+terms:keyes&key=${import.meta.env.VITE_API_KEY}`

const getBook = async () => {
  const data = await fetch(BASE_URL).then((data) => data.json())
  return data
}

function createBookElement(book) {
  // Create book container element
  const bookContainerElement = document.createElement('div')
  bookContainerElement.classList.add('book')
  bookContainerElement.classList.add('book_container')

  // Create book image cover
  const imageElement = document.createElement('img')
  imageElement.classList.add('book__cover')
  imageElement.src = book.smallThumbnail
  imageElement.alt = `Cover image fo book.smallThumbnail`

  // Create book title element
  const bookTitleElement = document.createElement('h3')
  bookTitleElement.classList.add('book__title')
  bookTitleElement.innerText = book.title

  // Create book subtitle
  const bookSubtitleElement = document.createElement('h3')
  bookSubtitleElement.classList.add('book__subtitle')
  bookSubtitleElement.innerText = book.subtitle

  // Create name for the author of the book
  const authorElement = document.createElement('p')
  authorElement.classList.add('book__author')
  authorElement.innerText = book.authors

  // Create the number of pages for the book
  const bookPageNumberElement = document.createElement('p')
  bookPageNumberElement.classList.add('book__pageNumber')
  bookPageNumberElement.innerText = book.pageCount

  // Create the book description
  const bookDescriptionElement = document.createElement('p')
  bookDescriptionElement.classList.add('book__description')
  bookDescriptionElement.innerText = book.description

  // Create the price and currency for the book
  const bookPriceElement = document.createElement('h3')
  bookPriceElement.classList.add('book__price')
  bookPriceElement.innerText = book.amount

  const bookCurrencyElement = document.createElement('h3')
  bookCurrencyElement.classList.add('book__currency')
  bookCurrencyElement.innerText = book.currencyCode

  // Put all the information in the book container element
  bookContainerElement.appendChild(imageElement)
  bookContainerElement.appendChild(bookTitleElement)
  bookContainerElement.appendChild(bookSubtitleElement)
  bookContainerElement.appendChild(authorElement)
  bookContainerElement.appendChild(bookPageNumberElement)
  bookContainerElement.appendChild(bookDescriptionElement)
  bookContainerElement.appendChild(bookPriceElement)
  bookContainerElement.appendChild(bookCurrencyElement)

  return bookContainerElement
}
/** "volumeInfo": {
//     "title": "Orasul Semilunii",
//     "subtitle": "Casa Pamantului si a Sangelui",
//     "authors": [
//         "Sarah J. Maas"
//     ],
//     "publisher": "Grup Editorial Litera",
//     "publishedDate": "2020-11-23",
//     "description": "Bryce Quinlan avea o viață perfectă – muncea din greu în fiecare zi și petrecea de zor în fiecare noapte – până când un demon i-a ucis cei mai buni prieteni și a lăsat-o sfâșiată de durere, rănită și singură. Când acuzatul ajunge în spatele gratiilor, dar crimele continuă, Bryce se trezește în mijlocul cercetărilor și își jură că va face tot ce poate pentru a-și răz - buna prietenii. Hunt Athalar este un celebru înger căzut, sclav la Arhan ghelii pe care a încercat mai demult să-i răstoarne de la putere. Abilitățile lui feroce și puterea incredibilă au fost folosite cu un singur scop: să-i asasineze pe dușmanii stăpânului său, fără să pună întrebări. Dar fiindcă un demon a dat peste cap tot orașul, i se oferă o șansă incredibilă: va fi liber, dacă o va ajuta pe Bryce să găsească criminalul. Bryce și Hunt ajung în subsolurile cele mai insalubre ale Orașului Semilunii, unde descoperă o putere întunecată ce amenință tot ce au mai drag pe lume. În același timp, sunt cuprinși de o pasiune înflăcărată, care ar putea să-i elibereze pe amândoi dacă s-ar lăsa în voia ei. Cu personaje de neuitat, o poveste incitantă de iubire și pagini întregi de acțiune plină de suspans, Casa Pământului și a Sângelui, primul volum din seria Orașul Semilunii, îi dă ocazia autoarei să ne arate ce înseamnă durerea pierderii, prețul libertății și puterea dragostei. „O adevărată lecție despre cum se creează o lume în ficțiune. Nu ratați această carte!“ Charlaine Harris, autoarea romanelor care au inspirat serialul True Blood",
//     "pageCount": 928,
//     "printType": "BOOK",
//     "categories": [
//         "Fiction"
//  //     "imageLinks": {
//         "smallThumbnail": "http://books.google.com/books/content?id=l-gTEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//         "thumbnail": "http://books.google.com/books/content?id=l-gTEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//   //     "language": "ro",
//// "saleInfo": {
//      "listPrice": {
//         "amount": 34.99,
//         "currencyCode": "RON"*/

// async function getBook() {
//   const url = fetch(
//     'https://www.googleapis.com/books/v1/volumes?q=search+terms'
//   )
//     .then((data) => {
//       return data.json()
//     })
//     .then((completedata) => {
//       console.log(completedata.items)
//     })
// }

// Initial function for search elements
function init() {
  const searchInputElement = document.querySelector('.input_container')
  const searchButton = document.querySelector('#searchBook')
  const bookResultsElement = document.querySelector('.book__results')

  //   // Added event listener for "click"

  searchButton.addEventListener('click', () => {
    const books = getBook(searchInputElement.value)
    console.log(books)

    books.items.map((book) =>
      bookResultsElement.appendChild(createBookElement(book))
    )
  })

  init()
}

getBook()
