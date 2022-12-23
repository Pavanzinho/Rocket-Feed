import ptBr from "date-fns/locale/ptBr";

let dateFns={locale:ptBr}

type DateType =typeof dateFns;

declare module 'date-fns/locale/ptBr'{
    export interface ptBr extends DateType{}
}

