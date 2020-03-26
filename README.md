# Virtuálna žiacka knižka

## Zadanie pre uchádzača FE developer - Cleverlance

Požadujeme vytvorenie žiackej knižky s možnosťou pridávania žiakov, predmetov a známkovania.

## Popis fungovania aplikácie

* Aplikácia obsahuje 3 samostatné stránky:

  1. zoznam žiakov s možnosťou pridávať žiakov
  2. zoznam predmetov s možnosťou pridávať predmety
  3. žiacku knižku žiaka, kde budú zobrazené udelené hodnotenia (známky ako v škole: 1..5) k vybraným predmetom s možnosťou pridávať ďalšie známky k daným predmetom

* Aplikácia **neudržiava** dáta pri obnovení stránky - refresh dáta automaticky zmaže a aplikáciu uvedie do pôvodného stavu.

## Požadované technológie

* [Vue.js](https://vuejs.org/)

## Voliteľné

Dôraz kladieme na technické prevedenie a splnenie zadania.
Responzivita nie je povinná, ale je to plus, rovnako ako dobré UX.


## Spuštění aplikace

* Po naklonování ve složce spustit npm install (nutný nodejs >6.0.0 a npm >3.0.0);
* Po úspěšné instalaci pak spustit npm run dev (může vyžadovat admin práva)
* Aplikace se spustí na localhostu (port pravděpodobně 8080)
* Aplikace běží v DEV modu, takže každá úprava v kodu, vyvola hot-reload.
* Pro nasazení na server je nutné spustit npm run build
* Výsledná app pak je v složce dist, kterou je nutné nasadit na server, případně spustit pomocí dockeru apod.

