import { ICar } from "./ICar";
import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "../../node_modules/axios/index"
// interfaces
let ContentElement: HTMLDivElement = <HTMLDivElement>document.getElementById("content");


function getAllCars():void {
    axios.get<ICar[]>("https://webapicar20190326034339.azurewebsites.net/api/cars")

        .then(function (Response: AxiosResponse<ICar[]>): void{
            console.log(Response);
            
        })
        .catch(function (error: AxiosError): void{
            console.log("error")
            console.log(error);
    })
        
    
    console.log("Er i slutningen af then")
}


getAllCars();