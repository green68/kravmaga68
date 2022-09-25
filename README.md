# Application Kravmaga Comptabilité

## Documentations utiles :

* [reactdatepicker year](https://reactdatepicker.com/#example-year-picker)
* [jsonvisio.com](https://jsonvisio.com/editor) : pour édition graphique des fichiers json

## Suivi :

### FIX :


### TODO :
- [ ] disabled validation on tabulation if error in UserInit.jsx
- [ ] drop file in DropFile.jsx (see [react-dropzone.js]( https://react-dropzone.js.org/#section-previews))


- [ ] cashItem card design in cardPage
- [ ] cashItem set auto folio 
    ex: "2022-001" -> console.log(`${year}-${id.padStart(3, '0')}`)

- [ ] bank form 
- [ ] bankPage list bankItems
- [ ] save new bankItem
- [ ] bankItem card design in bankPage
- [ ] bankItem if type="retrait" mvt negative => set an instance for cashItem 
- [ ] bankItem if type="depot" mvt positive => set an instance for cashItem 


### DONE :
<!-- 2022-09-25 -->
- [x] fix cursor autofocus in cashForm
- [x] fix error on year===null & path Menu.Cash

- [x] fix tool delete datas not deleted bank & cash items <!-- 2022-09-24 -->
- [x] fix label to truncable in CashItemCard
- [x] change icon for png and favicon

- [x] save new cashItem <!-- 2022-09-21 -->
- [x] cashPage list cashItems with overflow

- [x] add listing for cashItems (first shoot) <!-- 2022-09-17 -->

- [x] Change icons for import & export datas<!-- 2022-09-14 -->

- [x] cash form display & entries <!-- 2022-09-13 -->
- [x] cash page first shoot 

- [x] upload datas <!-- 2022-09-10 -->

- [x] download datas <!-- 2022-09-08 : -->
- [x] reset datas
- [x] validation component
- [x] toolsPage
- [x] initPage
- [x] create first tests for App, BankItem, Year, Years <!-- 2022-07-21 :  -->
- [x] create class for App, BankItem, Year, Years
    
        


## Les tests

* pour lancer les tests: 

        npm run test

## Documentation :

    * [documentation jest](https://jestjs.io/fr/)
    * [vscode-jest](https://github.com/jest-community/vscode-jest#getting-started)
    * [hack pour gh-page](https://github.com/rafgraph/spa-github-pages)
    * [simple drag and drop file upload](https://codepen.io/dcode-software/pen/xxwpLQo?editors=0010)
    * [drag and drop file upload](https://codepen.io/joezimjs/pen/yPWQbd?editors=0010)

## Autres infos

[Getting Started with Create React App](/react-app-readme.md)





