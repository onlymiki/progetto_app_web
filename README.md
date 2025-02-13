# Progetto AppWeb - TheCocktailDB

## Componenti del Gruppo & Repository
- **Gervasi Alessandro** - 866140
- **Mariani Michela** - 866056
- **Repository GitHub**: [Progetto AppWeb](https://github.com/onlymiki/progetto_app_web/blob/main/)

## Configurazione
Dopo aver clonato la repository, segui questi passaggi:
1. Installa le dipendenze:
   ```sh
   npm install
   ```
2. Aggiungi una nuova configurazione in npm:
   ```sh
   npm start
   ```

## Scelta dell'API
Per il progetto abbiamo utilizzato **TheCocktailDB**, un database di cocktail ben strutturato che supporta ricerche avanzate.

### Funzionalità utilizzate:
- Ricerca per nome: [`search.php?s=margarita`](http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita)
- Ricerca per ID: [`lookup.php?i=11007`](http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007)
- Ricerca per lettera: [`search.php?f=a`](http://www.thecocktaildb.com/api/json/v1/1/search.php?f=a)

## Strumenti Utilizzati
- **Figma**: Creazione della moodboard e dei mockup.
- **Gemini**: AI utilizzata per generare l’immagine Hero.
- **WebStorm**: IDE utilizzato per lo sviluppo del progetto.
- **React Router DOM**: Libreria per la gestione delle rotte in React.
- **Bootstrap**: Framework CSS per la personalizzazione grafica.
- **Reactstrap**: Libreria React basata su Bootstrap, utilizzata per la navbar.
- **React-Icons**: Libreria di icone per React, utilizzata per personalizzare l’icona del menù.

## Layout
### Moodboard
L'interfaccia si ispira ai **salotti Jazz**, al **lusso** e al **desiderio**.

### Font e Colori
- **Titoli**: *Warnes*, caratteristico ed estroso.
- **Testo principale**: *Tilt Neon*, chiaro e leggibile.
- **Colori principali**:
    - **Sfondo**: `#330102`
    - **Bottoni e icone**: `#B0240A`
    - **Titoli ed elementi attivi**: `#F29F58`
    - **Testi**: `#F8EDE2`

### Scelte grafiche
- **Gradiente nel footer**: Evoca sfumature di cocktail come **Cuba Libre** e **Long Island**.
- **Hero generata da Gemini**: Basata su immagini trovate online.
- **Design responsive**: Adattabile a diversi dispositivi.

## Scelte Progettuali
### Current Letter
Caricamento dei drink per lettera corrente tramite `fetch`, con gestione dello stato tramite `currentLetter`.

### Load More Cocktails
Bottone che carica altri cocktail nella pagina.

### Funzione di Ricerca
- Lente di ingrandimento apre un campo di input per cercare drink per nome.
- Una volta avviata la ricerca, vengono mostrati i drink corrispondenti.
- Possibilità di tornare alla lista principale con una freccia che ricarica la pagina.

### Routing
- Gestito con **react-router-dom**.
- Percorsi definiti con **BrowserRouter, Routes e Route**.
- **NavLink** usato per la navigazione tra le pagine.

## Struttura del Progetto
### Cartelle principali
- **public/**: Contiene favicon e risorse statiche.
- **src/**: Contiene il codice principale.
    - **assets/**: Immagini e icone.
    - **components/**: Componenti React.
    - **views/**: Pagine visualizzabili.

### Componenti principali
- **CardGridDrinks / CardTableDrinks**: Visualizzazione dei drink in modalità griglia o tabella.
- **CardHome**: Collegamento alle pagine principali.
- **CardTopTen**: Mostra i dettagli di un drink nella Top Ten.
- **RedButton**: Permette di caricare più drink.

### Pagine principali (Views)
- **App.jsx**: Entry point dell'applicazione.
- **DrinkDetails.jsx**: Dettagli di un singolo drink.
- **Drink.jsx**: Visualizzazione dei drink in modalità griglia o tabella.
- **Home.jsx**: Panoramica e collegamenti alle pagine principali.
- **TopTen.jsx**: Mostra i 10 drink più popolari.

## Problematiche Riscontrate
### Navigazione tra drink per ID
- Inizialmente prevista una navigazione sequenziale tramite ID, ma non coerente con l'ordinamento alfabetico scelto.
- Soluzione: rimozione della navigazione per ID e aggiunta di una freccia per tornare alla lista dei drink.

### Codice per la navigazione tra drink
```javascript
const findNextDrink = async (currentId, direction) => {
    let nextId = parseInt(currentId) + direction;
    while (nextId > 0) {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${nextId}`);
            const data = await response.json();
            if (data.drinks) {
                navigate(`/drink/${nextId}`);
                return;
            }
        } catch (error) {
            console.error("Errore nell'API:", error);
        }
        nextId += direction;
    }
};
```

## Sviluppi Futuri
- **Navigazione tra DrinkDetails per nome** invece che per ID.
- **Opzioni di filtraggio avanzate** per ingrediente, categoria e tipo di bicchiere.
- **Top Ten interattiva** per mostrare i dettagli di ogni drink selezionato.
