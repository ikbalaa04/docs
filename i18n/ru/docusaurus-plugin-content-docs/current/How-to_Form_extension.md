---
title: 'How-to: Расширение форм'
---

Предположим, что существует модуль, в котором описывается форма `Sku`, которая является формой для редактирования Sku:

```lsf
MODULE Sku;

CLASS Sku; // объявляем класс Sku

name 'Наименование' = DATA BPSTRING[100] (Sku); // создаем ему свойство имя

FORM sku 'Sku' // создаем форму Item
    // добавляем объект товар и делаем, чтобы на ней отображался ровно один экземпляр
    OBJECTS s = Sku PANEL 
    PROPERTIES(s) name // добавляем свойство имени товара на форму

    EDIT Sku OBJECT s;
;

DESIGN sku {
    // создаем новый контейнер в стандартный контейнер сразу после i.box
    // этот контейнер будет панелью закладок, в который можно будет добавлять закладки со свойствами товара
    NEW skuDetails AFTER BOX(s) {
        tabbed = TRUE;
        fill = 1; // пусть расширяется на всю форму
    }
}
```

Необходимо реализовать функционал по добавлению к Sku множества штрих-кодов. Это можно реализовать, создав новый модуль, который введет новый класс `Barcode` и расширит форму редактирования Sku возможностью ввода штрих-кодов:

```lsf
MODULE Barcode;

REQUIRE Sku;

CLASS Barcode; // объявляем класс штрих-кода

id = DATA BPSTRING[13] (Barcode); // создаем свойство с номером штрих-кода
sku = DATA Sku (Barcode); // создаем ссылку штрих-кода на sku

EXTEND FORM sku // создаем форму Item
    OBJECTS b = Barcode // добавляем объект штрих-кодов
    PROPERTIES(b) id // добавляем номер штрих-кода в таблицу штрих-кодов
    PROPERTIES(b) NEW, DELETE // добавляем действия по созданию и удалению штрих-кодов
    FILTERS sku(b) == s // делаем, чтобы показывались только штрих-коды этого sku
;

DESIGN sku { // расширяем дизайн формы Item
    skuDetails {
        // делаем контейнер, в котором находится все, что касается штрих-кодов, закладкой в предварительно
        // созданной панели закладок
        MOVE BOX(b); 
    }
}
```

Следует отметить, что модуль `Barcode` рассчитывает на то, что существует форма `Sku`, и в ней есть объект `s` и контейнер с именем `skuDetails`. Если форма по какой-либо причине изменится, то модуль `Barcode` станет неработоспособным.
