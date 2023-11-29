import { NgModule } from "@angular/core";
import { priyaComponent } from "./priya.component";
import { chethanaComponent } from "./chethana.component";

// sharedModule
@NgModule({
    declarations:[priyaComponent,chethanaComponent],
    exports:[priyaComponent,chethanaComponent]
})
export class teamModule{

}