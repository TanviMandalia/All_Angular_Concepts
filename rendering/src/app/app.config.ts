import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig = {
  providers: [provideClientHydration(), provideClientHydration(withEventReplay())],
};
