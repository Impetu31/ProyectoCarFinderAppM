import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const auth = getAuth();

  return new Promise<boolean>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(true);
      } else {
        router.navigate(['/login']);
        resolve(false);
      }
    });
  });
};
