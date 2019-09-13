import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CopcoTableComponent } from './capcoComponents/copco-table/copco-table.component';
import { CapcoSampleService} from './capcoService/capcoSampledataservice/capco-sample.service';
import { CapcoFakeEndPointInterceptors} from './Interceptors/CapcoFakeEndPoint.intcerptor';
import { CapcoPagerService} from './capcoService/capcopagingservice/pager-service.service';
import { CapcoPagerComponent } from './capcoComponents/capco-pager/capco-pager.component';
import { PowerPipe } from './capcoPipes/power.pipe';
import { EllipsisPipe } from './capcoPipes/ellipsis/ellipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CopcoTableComponent,
    CapcoPagerComponent,
    PowerPipe,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CapcoSampleService,
    CapcoPagerService,
    {
      provide: HTTP_INTERCEPTORS,
       useClass: CapcoFakeEndPointInterceptors,
       multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
