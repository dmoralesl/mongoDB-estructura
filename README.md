## ESTRUCTURA 
<br>
Per poder entendre l'estructura de les BBDD als fitxers .png s'ha de tenir en compte que els objectes amb la part superior de color verd són col·leccions. I els de color blau són embedded documents (o arrays) dintre del document base de la col·lecció.

Altres notes important són que a les relacions entre document i embedded document hi ha un petit text que indica si és un altre document (obj) o un array (ary).   
Els elements embedded, a més, tenen una fulla a la part superior dreta del seu requadre. Si la fulla és verda, es tracta d'un document directament dintre del document original. Però si la fulla és marró significarà que es refereix a un array amb objectes del tipus definit a eixe requadre.   
Per últim, alguns camps tenen definides unes fletxes a la banda dreta. Aquestes fletxes indiquen una relació, habitualment com a clau forània entre dues col·leccions.

Per a l'exercici de l'òptica no hi ha massa a comentar, ja que és bastant simple i s'ha pogut agrupar tot amb una única col·lecció i embedded documents.   
Però per al cas de la pizzeria, s'ha buscat una aproximació en la qual per als elements més recurrents es creen embedded documents reduïts. Aquests tenen la informació més clau i el ID per referenciar el document a la col·lecció pertinent on es trobarà tota la informació. D'aquesta forma, amb una única consulta es pot recuperar el "overview" de la situació (per exemple una comanda a la pizzeria) i tindrem el nom del client, de l'empleat... Però ja pensant en la web, si es volgués a partir de la comanda fer click al nom de l'empleat que l'ha servida i veure més informació d'ell, es tindria el ID per fer una query i extraure el detall concret d'aquest empleat.


<br>   
<hr>   

## EXECUCIÓ
<br>
Per a executar un dels fitxers simplement s'haurà de fer ús del comandament mongo (s'ha de tenir mongo en marxa al port per defecte) seguit del nom de la BBDD i després el nom del fitxer. Per al cas de l'òptica seria:

```bash
mongo optica optica.js
```