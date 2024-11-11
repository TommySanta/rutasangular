import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { CineComponent } from "./components/cine/cine.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { NumerodobleComponent } from "./components/numerodoble/numerodoble.component";
import { TablamultiplicarroutingComponent } from "./components/tablamultiplicarrouting/tablamultiplicarrouting.component";


const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "cine", component: CineComponent},
    {path: "musica", component: MusicaComponent},
    {path: "doble", component: NumerodobleComponent},
    {path: "doble/:numero", component: NumerodobleComponent},
    {path: "tabla/:numero", component: TablamultiplicarroutingComponent},
    {path: "**", component: NotfoundComponent},

]

export const AppRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);