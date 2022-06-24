import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./connexion/login/login.component";
import { RegisterComponent } from "./connexion/register/register.component";
import { WelcomeComponent } from "./connexion/welcome/welcome.component";

const routes: Routes = [
    {path: "", component:WelcomeComponent},
    {path: "register", component:RegisterComponent},
    {path: "login", component:LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [WelcomeComponent, RegisterComponent, LoginComponent]